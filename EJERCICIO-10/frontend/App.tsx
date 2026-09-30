import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

interface Mascota {
  id: number;
  nombre: string;
  tipo: string;
  likes: number;
}

const API_URL = 'http://172.22.28.55:3000';

export default function App() {
  const [mascota, setMascota] = useState<Mascota | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  const [enviandoLike, setEnviandoLike] = useState<boolean>(false);

  const cargarMascota = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(`${API_URL}/mascotas/1`);
      const datos: Mascota = await respuesta.json();
      setMascota(datos);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  const darLike = async () => {
    try {
      setEnviandoLike(true);
      const respuesta = await fetch(`${API_URL}/mascotas/1/like`, {
        method: 'PATCH',
      });
      const mascotaActualizada: Mascota = await respuesta.json();
      setMascota(mascotaActualizada);
    } catch (error) {
      console.error(error);
    } finally {
      setEnviandoLike(false);
    }
  };

  useEffect(() => {
    cargarMascota();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>C01 · NEST + RN</Text>
          <Text style={styles.sub}>PATCH /mascotas/:id/like</Text>

          {cargando ? (
            <ActivityIndicator size="large" color="#38bdf8" style={styles.loader} />
          ) : mascota ? (
            <View style={styles.content}>
              <View style={styles.petCard}>
                <Text style={styles.petName}>{mascota.nombre}</Text>
                <Text style={styles.petType}>{mascota.tipo}</Text>
                <View style={styles.likesContainer}>
                  <Text style={styles.likesText}>❤️ {mascota.likes} likes</Text>
                </View>
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.likeButton,
                  pressed && styles.likeButtonPressed,
                ]}
                onPress={darLike}
                disabled={enviandoLike}
              >
                {enviandoLike ? (
                  <ActivityIndicator color="#ffffff" />
                ) : (
                  <Text style={styles.buttonText}>❤️ ME GUSTA</Text>
                )}
              </Pressable>
            </View>
          ) : (
            <Text style={styles.errorText}>Error al cargar la mascota</Text>
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
    marginBottom: 20,
  },
  loader: {
    marginVertical: 32,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  petCard: {
    width: '100%',
    backgroundColor: '#0f172a',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  petType: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  likesContainer: {
    marginTop: 14,
    backgroundColor: '#1e293b',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e11d48',
  },
  likesText: {
    color: '#fb7185',
    fontWeight: 'bold',
    fontSize: 16,
  },
  likeButton: {
    backgroundColor: '#e11d48',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  likeButtonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  errorText: {
    color: '#f87171',
    marginVertical: 20,
  },
});