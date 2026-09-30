import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

interface Heroe {
  id: number;
  nombre: string;
  poder: string;
  universo: string;
}

const API_URL = 'http://172.22.28.55:3000';

export default function App() {
  const [idBusqueda, setIdBusqueda] = useState<string>('');
  const [heroe, setHeroe] = useState<Heroe | null>(null);
  const [cargando, setCargando] = useState<boolean>(false);
  const [mensajeError, setMensajeError] = useState<string | null>(null);

  const buscarHeroe = async () => {
    if (!idBusqueda.trim()) {
      setMensajeError('Introduce un ID válido');
      setHeroe(null);
      return;
    }

    try {
      setCargando(true);
      setMensajeError(null);
      const respuesta = await fetch(`${API_URL}/heroes/${idBusqueda.trim()}`);
      if (!respuesta.ok) {
        throw new Error('Héroe no encontrado');
      }
      const datos: Heroe = await respuesta.json();
      setHeroe(datos);
    } catch (error) {
      setHeroe(null);
      setMensajeError('Superhéroe no encontrado');
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>C01 · NEST + RN</Text>
          <Text style={styles.sub}>GET /heroes/:id</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Introduce ID (ej. 1, 2, 3)"
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={idBusqueda}
              onChangeText={setIdBusqueda}
            />
            <Pressable style={styles.searchButton} onPress={buscarHeroe} disabled={cargando}>
              {cargando ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>BUSCAR</Text>
              )}
            </Pressable>
          </View>

          {mensajeError && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>🔴 {mensajeError}</Text>
            </View>
          )}

          {heroe && (
            <View style={styles.ficha}>
              <Text style={styles.fichaNombre}>{heroe.nombre}</Text>
              <View style={styles.datoRow}>
                <Text style={styles.datoEtiqueta}>Poder:</Text>
                <Text style={styles.datoValor}>{heroe.poder}</Text>
              </View>
              <View style={styles.datoRow}>
                <Text style={styles.datoEtiqueta}>Universo:</Text>
                <Text style={styles.universoBadge}>{heroe.universo}</Text>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
  },
  sub: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#f8fafc',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorBox: {
    backgroundColor: '#450a0a',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b91c1c',
    alignItems: 'center',
    marginTop: 8,
  },
  errorText: {
    color: '#fca5a5',
    fontWeight: 'bold',
    fontSize: 14,
  },
  ficha: {
    marginTop: 16,
    backgroundColor: '#0f172a',
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 12,
  },
  fichaNombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38bdf8',
    textAlign: 'center',
  },
  datoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  datoEtiqueta: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '600',
  },
  datoValor: {
    color: '#f8fafc',
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
  universoBadge: {
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#475569',
  },
});