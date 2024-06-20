import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function ListaScreen({ listData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Clientes Cadastrados</Text>
      {listData.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum cliente cadastrado.</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={listData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text>Nome: {item.nome}</Text>
              <Text>CPF: {item.cpf}</Text>
              <Text>Idade: {item.idade}</Text>
              <Text>CEP: {item.cep}</Text>
              <Text>Endereço: {item.endereco}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginTop: 20,
  },
});
