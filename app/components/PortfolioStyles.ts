import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1 },
  upperSection: {
    flex: 3,
    paddingHorizontal: 20,
    height: -300,
    paddingBottom: 20,
  },
  lowerSection: {
    flex: 2, 
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -500, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: -2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 10, 
    elevation: 5, 
  },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { fontSize: 16, color: '#7B42F5', marginTop: 10 },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 16, color: 'red' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
    marginLeft: -15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  bellIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
    marginRight: -10,
  },

  currentValueSection: { alignItems: 'center', marginVertical: 10 },
  currentValueTitle: { fontSize: 16, color: '#FFFFFF' },
  currentValue: { fontSize: 36, color: '#FFFFFF' },
  currentValueContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 10,
  },
  rupeeIcon: {
    width: 40, 
    height: 40, 
    tintColor: '#FFFFFF', 
    marginRight: 0, 
  },
  totalReturnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  totalReturnsText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 5,
  },
  upArrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#00E676',
    marginRight: 5,
  },
  totalReturnsValue: {
    flexDirection: 'row',
    fontSize: 16,
    color: '#FFFFFF',
  },
  returnsWhite: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  returnsPositive: {
    fontSize: 16,
    color: '#00E676',
  },

  metricsRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  metricBox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
  },
  metricLabel: { fontSize: 14, color: '#E0E0E0' },
  metricValue: { fontSize: 16, color: '#FFFFFF', marginTop: 5 },

  graphPlaceholder: {
    //flex: , 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginBottom: 40,
    marginTop: -20,
    width: '100%',

  },
  graph: {
    flexDirection: 'column',
    width: '100%', 
    height: undefined, 
    aspectRatio: 16 / 9, 
    resizeMode: 'contain', 

  },

  investButton: {
    backgroundColor: '#05b463', 
    padding: 20, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    marginHorizontal: 0, 
    marginBottom: 20, 
    shadowColor: '#227500', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.7, 
    shadowRadius: 3, 
    elevation: 5, 
    //marginTop: 0,
  },
  
  investButtonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  
  investButtonIcon: {
    width: 20, 
    height: 20, 
    tintColor: '#ffffff',
    marginRight: 10, 
  },
  
  investButtonText: {
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  

  loanButton: {
    backgroundColor: '#5500ff', 
    padding: 20, 
    borderRadius: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row', 
    marginHorizontal: 0, 
    marginBottom: 10, 
    shadowColor: '#3600a9', 
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.7, 
    shadowRadius: 3, 
    elevation: 5, 
    //marginTop: 0,
  },
  
  loanButtonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  
  loanButtonIcon: {
    width: 20, 
    height: 20, 
    tintColor: '#ffffff',
    marginRight: 10, 
  },
  
  loanButtonText: {
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  
  loanIcon: {
    width: 16,
    height: 16,
    tintColor: '#ffffff',
    marginRight: 5,
  },


  footerButtons: { flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginVertical: 10 },
  footerButton: {
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 3,
    borderWidth: 2, 
    borderColor: '#5500FF', 
    borderRadius: 20,
    backgroundColor: '#FFFFFF', 
    flexDirection: 'row',
    //overflow: 'hidden',
  },
  portfolioButtonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  
  portfolioButtonIcon: {
    width: 20, 
    height: 20, 
    tintColor: '#5500ff',
    marginRight: 5, 
  },
  
  portfolioButtonText: {
    color: '#000000', 
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  redeemButtonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  
  redeemButtonIcon: {
    width: 20, 
    height: 20, 
    tintColor: '#5500ff',
    marginRight: 5, 
  },
  
  redeemButtonText: {
    color: '#000000', 
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  transButtonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
    
  },
  
  transButtonIcon: {
    width: 20, 
    height: 20, 
    tintColor: '#5500ff',
    marginRight: 5, 
  },
  
  transButtonText: {
    color: '#000000', 
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  
});

export default styles;
