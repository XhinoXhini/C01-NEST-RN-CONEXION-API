import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const API_URL = 'http://172.22.28.55:3000';

export default function App() {
  const [mensaje, setMensaje] = useState<string>('Cargando...');
  const [estado, setEstado] = useState<string>('Esperando...');
  const [cargando, setCargando] = useState<boolean>(true);

  const cargarMensaje = async () => {
    try {
      setCargando(true);
      setMensaje('Cargando...');
      const respuesta = await fetch(`${API_URL}/mensaje`);
      const datos = await respuesta.json();
      setMensaje(`🟢 ${datos.texto}`);
      setEstado(datos.estado);
    } catch (error) {
      setMensaje('🔴 Error de conexión con NestJS');
      setEstado('Desconectado ❌');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarMensaje();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>C01 · NEST + RN</Text>
          <Text style={styles.sub}>pantalla → carga inicial</Text>

          <View style={styles.responseBox}>
            <Text style={styles.icon}>📡</Text>
            <Text style={styles.messageText}>{mensaje}</Text>
            <Text style={styles.statusBadge}>Estado: {estado}</Text>
          </View>

          <Pressable style={styles.button} onPress={cargarMensaje} disabled={cargando}>
            {cargando ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>RECARGAR</Text>
            )}
          </Pressable>
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
    padding: 26,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
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
    marginBottom: 24,
  },
  responseBox: {
    width: '100%',
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 32,
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e2e8f0',
    textAlign: 'center',
  },
  statusBadge: {
    marginTop: 10,
    color: '#38bdf8',
    fontSize: 13,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2563eb',
    width: '100%',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});