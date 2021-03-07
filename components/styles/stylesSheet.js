import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C86EE',
  },

  companyName:{
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FCFBFC',
  },


  paragraph: {
    margin: 24,
    fontSize: 18,
    fontFamily: "Segoe UI",
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FCFBFC',
  },

  HeaderText: {
    margin: 15,
    marginBottom: -5,
    fontFamily: "Segoe UI",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#FCFBFC',
  },
  SignHeaderText:{
    marginLeft: 20,
    marginTop: 100,
    margin: 15,
    marginBottom: -5,
    fontFamily: "Segoe UI",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'#d3d3d3',
  },

  textStyle: {
    margin: 5,
    fontSize: 16,
    color: '#1C86EE',
  },

  boarder: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    margin: 15,
    marginBottom: 0,
    borderBottomColor: '#ACB0B3',
    fontFamily: "Segoe UI",
    color: '#FCFBFC',
  },

  submitButton: {
    backgroundColor: '#FCFBFC',
    padding: 5,
    margin: 8,
    height: 55,
    fontFamily: "Segoe UI",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    //borderWidth: 1,
 },

 submitButtonText:{
    color: '#1C86EE',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
 },

 transparentButton: {
  margin: -20,
  backgroundColor: 'transparent',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
 },

 checkboxContainer: {
  flexDirection: "row",
  marginTop: 20,
  alignItems: 'center',
  marginBottom: 20,
},

checkbox: {
  alignSelf: "center",
  marginLeft: 10,
},

checkboxLabel: {
  fontFamily: "Segoe UI",
  color: '#FFFFFF',
  marginLeft: 10,
},

accountScreenContainer: {
  flex: 1,
  //alignItems: 'flex-start',
},

accountTopContainer: {
  flexDirection: 'column',
  justifyContent: 'space-around',

},

accountMiddleContainer: {

},


accountBottomContainer: {

},

})
