import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  containerSibling: {
    width: '80%',
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', // Abu-abu
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  operatorButton: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', // Abu-abu
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', // Abu-abu
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  equalButton: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', // Abu-abu
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#444',
    color: 'white',
    padding: 12,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export { styles };
