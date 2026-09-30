import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const API_URL = 'http://172.22.28.55:3000';

export default function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState<string>('');
  const [precio, setPrecio] = useState<string>('');
  const [cargando, setCargando] = useState<boolean>(true);
  const [enviando, setEnviando] = useState<boolean>(false);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(`${API_URL}/productos`);
      const datos: Producto[] = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = async () => {
    if (!nombre.trim() || !precio.trim() || isNaN(Number(precio))) {
      return;
    }

    try {
      setEnviando(true);
      const respuesta = await fetch(`${API_URL}/productos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          precio: Number(precio),
        }),
      });

      const nuevo: Producto = await respuesta.json();
      setProductos((actuales) => [...actuales, nuevo]);
      setNombre('');
      setPrecio('');
    } catch (error) {
      console.error(error);
    } finally {
      setEnviando(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const renderItem = ({ item }: { item: Producto }) => (
    <View style={styles.card}>
      <Text style={styles.itemNombre}>{item.nombre}</Text>
      <View style={styles.badgePrecio}>
        <Text style={styles.itemPrecio}>{item.precio.toFixed(2)} €</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerBox}>
          <Text style={styles.header}>Mini Tienda</Text>
          <Text style={styles.sub}>POST /productos · @Body</Text>
        </View>

        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del producto"
            placeholderTextColor="#64748b"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Precio (ej. 19.99)"
            placeholderTextColor="#64748b"
            keyboardType="decimal-pad"
            value={precio}
            onChangeText={setPrecio}
          />
          <Pressable
            style={({ pressed }) => [styles.submitButton, pressed && styles.buttonPressed]}
            onPress={agregarProducto}
            disabled={enviando}
          >
            {enviando ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>AÑADIR</Text>
            )}
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Catálogo Actual</Text>

        {cargando ? (
          <ActivityIndicator size="large" color="#38bdf8" style={styles.loader} />
        ) : (
          <FlatList
            data={productos}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
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
  headerBox: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  sub: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  formCard: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 12,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#f8fafc',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#94a3b8',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  loader: {
    marginTop: 30,
  },
  listContainer: {
    gap: 10,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  itemNombre: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
  },
  badgePrecio: {
    backgroundColor: '#0f172a',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#38bdf8',
  },
  itemPrecio: {
    color: '#38bdf8',
    fontWeight: 'bold',
    fontSize: 14,
  },
});