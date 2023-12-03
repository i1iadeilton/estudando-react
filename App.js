import * as React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  cardapioImage: {
    width: 800,
    height: 800,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  
});

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Informações Pessoais</Text>

      <Text style={styles.infoText}>Nome: Jose Adeilton</Text>
      <Text style={styles.infoText}>Email: i1iadeilton@gmail.com</Text>
      <Text style={styles.infoText}>Telefone: (81) 9969-4566</Text>

      <Text style={styles.sectionTitle}>Formação</Text>

      <Text style={styles.infoText}>FACULDADE SENAC PERNAMBUCO</Text>
      <Text style={styles.infoText}>Curso: Tecnologo em Análise e Desnvolvimento de Sistemas</Text>
      <Text style={styles.infoText}>Data de Conclusão: 11/2024</Text>

      <Text style={styles.infoText}></Text>
      
      <Text style={styles.infoText}>ETE Ginásio Pernambucano</Text>
      <Text style={styles.infoText}>Curso: Técnico em nálise e Desnvolvimento de Sistemas</Text>
      <Text style={styles.infoText}>Data de Conclusão: 08/2022</Text>

      <Text style={styles.sectionTitle}>Certificados</Text>

      <Pressable
        onPress={() => navigation.navigate('Formacao')}
        style={styles.button}>
        <Text style={styles.buttonText}>START 2022 - JAVA</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Projetos')}
        style={styles.button}>
        <Text style={styles.buttonText}>Rede cidadã - Socioemocional</Text>
      </Pressable>

      
    </View>
  );
}



function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>START 2022 - JAVA</Text>

      <Image
        style={styles.cardapioImage}
        source={require('./img/JAVA.jpg')}  // Substitua pelo caminho real da sua imagem
      />
      
    </View>
  );
}

function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Formação Socioemocional</Text>
      <Image
        style={styles.cardapioImage}
        source={require('./img/socioemocional.jpg')}  // Substitua pelo caminho real da sua imagem
      />
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Projetos" component={Projetos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
