import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const handleGetStarted = () => {
    router.replace("/login");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/onboarding/onboarding.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.overlay} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to EShop</Text>
        <Text style={styles.subTitle}>Discover amazing products and shop with ease</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <LinearGradient colors={['#ff6b6b', '#4a66f0']} start={{x: 0, y:0}} end={{x: 1, y: 0}} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.6,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.8,
  },
  button: {
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
