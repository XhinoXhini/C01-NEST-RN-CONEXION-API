import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

interface Criatura {
  id: number;
  nombre: string;
  elemento: string;
  avatar: string;
  likes: number;
}

const API_URL = 'http://172.22.28.55:3000';

export default function App() {
  const [criaturas, setCriaturas] = useState<Criatura[]>([]);
  const [seleccionada, setSeleccionada] = useState<Criatura | null>(null);
  const [busquedaId, setBusquedaId] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(true);
  const [enviandoLike, setEnviandoLike] = useState<boolean>(false);
  const [errorBusqueda, setErrorBusqueda] = useState<string | null>(null);

  const cargarTodas = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(`${API_URL}/criaturas`);
      const datos: Criatura[] = await respuesta.json();
      setCriaturas(datos);
      if (datos.length > 0 && !seleccionada) {
        setSeleccionada(datos[0]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const buscarPorId = async (id: number) => {
    try {
      setErrorBusqueda(null);
      const respuesta = await fetch(`${API_URL}/criaturas/${id}`);
      if (!respuesta.ok) {
        throw new Error('No encontrada');
      }
      const encontrada: Criatura = await respuesta.json();
      setSeleccionada(encontrada);
    } catch (err) {
      setErrorBusqueda(`ID ${id} no encontrado`);
    }
  };

  const handleBuscar = () => {
    if (!busquedaId.trim() || isNaN(Number(busquedaId))) {
      setErrorBusqueda('Introduce un ID numérico');
      return;
    }
    buscarPorId(Number(busquedaId));
  };

  const darLike = async () => {
    if (!seleccionada) return;
    try {
      setEnviandoLike(true);
      const respuesta = await fetch(`${API_URL}/criaturas/${seleccionada.id}/like`, {
        method: 'PATCH',
      });
      const actualizada: Criatura = await respuesta.json();
      setSeleccionada(actualizada);
      setCriaturas((actuales) =>
        actuales.map((c) => (c.id === actualizada.id ? actualizada : c))
      );
    } catch (err) {
      console.error(err);
    } finally {
      setEnviandoLike(false);
    }
  };

  useEffect(() => {
    cargarTodas();
  }, []);

  const renderCard = ({ item }: { item: Criatura }) => {
    const esActiva = seleccionada?.id === item.id;
    return (
      <Pressable
        style={[styles.itemCard, esActiva && styles.itemCardActiva]}
        onPress={() => {
          setSeleccionada(item);
          setErrorBusqueda(null);
        }}
      >
        <Text style={styles.itemAvatar}>{item.avatar}</Text>
        <View style={styles.itemInfo}>
          <Text style={styles.itemNombre}>{item.nombre}</Text>
          <Text style={styles.itemElemento}>{item.elemento}</Text>
        </View>
        <Text style={styles.itemLikes}>❤️ {item.likes}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Creature Lab</Text>
          <Text style={styles.subtitulo}>Integración Full Stack · GET / GET:id / PATCH</Text>
        </View>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por ID..."
            placeholderTextColor="#64748b"
            keyboardType="numeric"
            value={busquedaId}
            onChangeText={setBusquedaId}
          />
          <Pressable style={styles.searchButton} onPress={handleBuscar}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </Pressable>
        </View>

        {errorBusqueda && (
          <View style={styles.errorAlert}>
            <Text style={styles.errorText}>🔴 {errorBusqueda}</Text>
          </View>
        )}

        {seleccionada && (
          <View style={styles.panelDetalle}>
            <Text style={styles.detalleAvatar}>{seleccionada.avatar}</Text>
            <Text style={styles.detalleNombre}>{seleccionada.nombre}</Text>
            <Text style={styles.detalleElemento}>{seleccionada.elemento}</Text>

            <Pressable
              style={({ pressed }) => [styles.btnLike, pressed && styles.btnLikePressed]}
              onPress={darLike}
              disabled={enviandoLike}
            >
              {enviandoLike ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text style={styles.btnLikeText}>❤️ ME GUSTA ({seleccionada.likes})</Text>
              )}
            </Pressable>
          </View>
        )}

        <Text style={styles.sectionHeader}>Colección</Text>

        {cargando ? (
          <ActivityIndicator size="large" color="#38bdf8" style={styles.loader} />
        ) : (
          <FlatList
            data={criaturas}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderCard}
            contentContainerStyle={styles.listado}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  subtitulo: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  searchBar: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#f8fafc',
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  errorAlert: {
    backgroundColor: '#450a0a',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b91c1c',
    marginBottom: 10,
    alignItems: 'center',
  },
  errorText: {
    color: '#fca5a5',
    fontSize: 13,
    fontWeight: '600',
  },
  panelDetalle: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
    marginBottom: 16,
  },
  detalleAvatar: {
    fontSize: 48,
  },
  detalleNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginTop: 4,
  },
  detalleElemento: {
    fontSize: 13,
    color: '#38bdf8',
    marginTop: 2,
  },
  btnLike: {
    marginTop: 12,
    backgroundColor: '#e11d48',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnLikePressed: {
    opacity: 0.8,
  },
  btnLikeText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#94a3b8',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  loader: {
    marginTop: 20,
  },
  listado: {
    gap: 8,
    paddingBottom: 20,
  },
  itemCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  itemCardActiva: {
    borderColor: '#38bdf8',
    backgroundColor: '#1e293b',
  },
  itemAvatar: {
    fontSize: 26,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemNombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  itemElemento: {
    fontSize: 12,
    color: '#94a3b8',
  },
  itemLikes: {
    color: '#fb7185',
    fontWeight: 'bold',
    fontSize: 13,
  },
});