import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1 },
  upperSection: {
    flex: 3, // Adjust the ratio of the upper section
    paddingHorizontal: 20,
    height: -300,
    paddingBottom: 20,
  },
  lowerSection: {
    flex: 2, // Adjust the ratio of the lower section
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -500, // Overlap the upper and lower sections
    // Shadow for iOS
    shadowColor: '#000', // Black shadow
    shadowOffset: { width: 0, height: -2 }, // Shadow direction (x, y)
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 10, // Blur effect

    // Shadow for Android
    elevation: 5, // Shadow depth
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
    flexDirection: 'row', // Align rupee icon and text horizontally
    alignItems: 'center', // Center align vertically
    justifyContent: 'center', // Center align horizontally
    marginTop: 10,
  },
  rupeeIcon: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
    tintColor: '#FFFFFF', // Ensure the rupee icon matches the text color
    marginRight: 0, // Space between icon and text
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
    //flex: , // Allow it to occupy available vertical space
    justifyContent: 'flex-start', // Center the graph vertically
    alignItems: 'center', // Center the graph horizontally
    marginBottom: 40,
    marginTop: -20,
    width: '100%',

  },
  graph: {
    flexDirection: 'column',
    width: '100%', // Makes the graph take 95% of the screen width
    height: undefined, // Ensures height scales proportionally
    aspectRatio: 16 / 9, // Match the aspect ratio of the graph image
    resizeMode: 'contain', // Ensure the image scales properly without cropping

  },

  investButton: {
    backgroundColor: '#05b463', // Green background
    padding: 20, // Padding around the button
    borderRadius: 20, // Rounded corners
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    flexDirection: 'row', // Align content in a horizontal row
    marginHorizontal: 0, // Horizontal margin
    marginBottom: 20, // Space below the button
    shadowColor: '#227500', // Black shadow
    shadowOffset: { width: 0, height: 5 }, // Shadow direction (x, y)
    shadowOpacity: 0.7, // Opacity of the shadow
    shadowRadius: 3, // Blur effect

    // Shadow for Android
    elevation: 5, // Shadow depth
    //marginTop: 0,
  },
  
  investButtonContent: {
    flexDirection: 'row', // Align the image and text in a horizontal row
    alignItems: 'center', // Vertically align items
  },
  
  investButtonIcon: {
    width: 20, // Width of the icon (adjust as needed)
    height: 20, // Height of the icon (adjust as needed)
    tintColor: '#ffffff',
    marginRight: 10, // Space between the icon and text
  },
  
  investButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Bold text
  },
  

  loanButton: {
    backgroundColor: '#5500ff', // Purple background
    padding: 20, // Padding around the button
    borderRadius: 20, // Rounded corners
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    flexDirection: 'row', // Align content in a horizontal row
    marginHorizontal: 0, // Horizontal margin
    marginBottom: 10, // Space below the button
    shadowColor: '#3600a9', // Black shadow
    shadowOffset: { width: 0, height: 5 }, // Shadow direction (x, y)
    shadowOpacity: 0.7, // Opacity of the shadow
    shadowRadius: 3, // Blur effect

    // Shadow for Android
    elevation: 5, // Shadow depth
    //marginTop: 0,
  },
  
  loanButtonContent: {
    flexDirection: 'row', // Align the image and text in a horizontal row
    alignItems: 'center', // Vertically align items
  },
  
  loanButtonIcon: {
    width: 20, // Width of the icon (adjust as needed)
    height: 20, // Height of the icon (adjust as needed)
    tintColor: '#ffffff',
    marginRight: 10, // Space between the icon and text
  },
  
  loanButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Bold text
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
    borderWidth: 2, // Purple border
    borderColor: '#5500FF', // Purple color
    borderRadius: 20,
    backgroundColor: '#FFFFFF', // White background
    flexDirection: 'row',
    //overflow: 'hidden',
  },
  portfolioButtonContent: {
    flexDirection: 'row', // Align the image and text in a horizontal row
    alignItems: 'center', // Vertically align items
  },
  
  portfolioButtonIcon: {
    width: 20, // Width of the icon (adjust as needed)
    height: 20, // Height of the icon (adjust as needed)
    tintColor: '#5500ff',
    marginRight: 5, // Space between the icon and text
  },
  
  portfolioButtonText: {
    color: '#000000', // White text color
    fontSize: 14, // Font size
    fontWeight: 'bold', // Bold text
  },
  redeemButtonContent: {
    flexDirection: 'row', // Align the image and text in a horizontal row
    alignItems: 'center', // Vertically align items
  },
  
  redeemButtonIcon: {
    width: 20, // Width of the icon (adjust as needed)
    height: 20, // Height of the icon (adjust as needed)
    tintColor: '#5500ff',
    marginRight: 5, // Space between the icon and text
  },
  
  redeemButtonText: {
    color: '#000000', // White text color
    fontSize: 14, // Font size
    fontWeight: 'bold', // Bold text
  },
  transButtonContent: {
    flexDirection: 'row', // Align the image and text in a horizontal row
    alignItems: 'center', // Vertically align items
    
  },
  
  transButtonIcon: {
    width: 20, // Width of the icon (adjust as needed)
    height: 20, // Height of the icon (adjust as needed)
    tintColor: '#5500ff',
    marginRight: 5, // Space between the icon and text
  },
  
  transButtonText: {
    color: '#000000', // White text color
    fontSize: 14, // Font size
    fontWeight: 'bold', // Bold text
  },
  
});

export default styles;
