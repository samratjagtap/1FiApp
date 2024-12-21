import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import styles from '../components/PortfolioStyles'; // Import external styles
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const GOOGLE_SHEET_API_URL =
  'https://sheets.googleapis.com/v4/spreadsheets/1tPXJij8qrILRpEvg3n9vrgbYNYYp0IbFeORLDw-D9do/values/Sheet1!A1:B6?key=AIzaSyArXR3mgKiQ2gON4TBaUUD5GXaofvNEQkU';

export default function PortfolioScreen() {
  const [data, setData] = useState<{ metric: string; value: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load Poppins fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(GOOGLE_SHEET_API_URL);
      if (response.data && response.data.values) {
        const rows = response.data.values.slice(1); // Skip the header row
        const formattedData = rows.map(([metric, value]: string[]) => ({ metric, value }));
        setData(formattedData);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err: any) {
      console.error('Error fetching Google Sheet data:', err.message);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Keep the splash screen visible while fonts are loading
  }

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7B42F5" />
        <Text style={[styles.loadingText, { fontFamily: 'Poppins_400Regular' }]}>Loading data...</Text>
      </SafeAreaView>
    );
  }

  if (error && !refreshing) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={[styles.errorText, { fontFamily: 'Poppins_400Regular' }]}>{error}</Text>
      </SafeAreaView>
    );
  }

  // Extract data dynamically from Google Sheets API response
  const currentValue = data.find((item) => item.metric === 'Current Value')?.value || 'N/A';
  const totalReturns = data.find((item) => item.metric === 'Total Returns')?.value || 'N/A';
  const invested = data.find((item) => item.metric === 'Invested')?.value || 'N/A';
  const xirr = data.find((item) => item.metric === 'XIRR')?.value || 'N/A';
  const oneDayReturn = data.find((item) => item.metric === '1 Day Return')?.value || 'N/A';

  return (
    <SafeAreaView style={styles.container}>
      {/* Upper Section (Purple Background) */}
      <LinearGradient colors={['#5e28eb', '#f700ff']} style={styles.upperSection}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left Side: Logo and "Invest" Text */}
          <View style={styles.leftHeader}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Text style={[styles.headerTitle, { fontFamily: 'Poppins_400Regular' }]}>Invest</Text>
          </View>

          {/* Right Side: Bell Icon */}
          <TouchableOpacity>
            <Image source={require('../../assets/images/bell.png')} style={styles.bellIcon} />
          </TouchableOpacity>
        </View>

        {/* Current Value Section */}
        <View style={styles.currentValueSection}>
          <Text style={[styles.currentValueTitle, { fontFamily: 'Poppins_400Regular' }]}>
            Current Value
          </Text>
            <View style={styles.currentValueContainer}>
            <Image source={require('../../assets/images/rupee.png')} style={styles.rupeeIcon} />
            <Text style={[styles.currentValue, { fontFamily: 'Poppins_400Regular' }]}> {currentValue.replace('₹', '').trim()}
          </Text>
  </View>

          {/* Total Returns Section */}
          <View style={styles.totalReturnsContainer}>
            <Text style={[styles.totalReturnsText, { fontFamily: 'Poppins_400Regular' }]}>
              Total Returns
            </Text>
            <Image source={require('../../assets/images/uparrow.png')} style={styles.upArrowIcon} />
            <Text style={[styles.totalReturnsValue, { fontFamily: 'Poppins_400Regular' }]}>
              {totalReturns.split(' ')[0]} {totalReturns.split(' ')[1]}{' '}
              <Text style={[styles.returnsPositive, { fontFamily: 'Poppins_400Regular' }]}>
                {totalReturns.split(' ')[2]}
              </Text>
            </Text>
          </View>
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsRow}>
          <View style={styles.metricBox}>
            <Text style={[styles.metricLabel, { fontFamily: 'Poppins_400Regular' }]}>Invested</Text>
            <Text style={[styles.metricValue, { fontFamily: 'Poppins_400Regular' }]}>{invested}</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={[styles.metricLabel, { fontFamily: 'Poppins_400Regular' }]}>XIRR</Text>
            <Text style={[styles.metricValue, { fontFamily: 'Poppins_400Regular' }]}>{xirr}</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={[styles.metricLabel, { fontFamily: 'Poppins_400Regular' }]}>1 Day Return</Text>
            <Text style={[styles.metricValue, { fontFamily: 'Poppins_400Regular' }]}>{oneDayReturn}</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Lower Section (White Background) */}
      <View style={styles.lowerSection}>
        {/* Graph Placeholder */}
        <View style={styles.graphPlaceholder}>
        <Image source={require('../../assets/images/graph.png')} style={styles.graph}/>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.investButton}>
        <View style={styles.investButtonContent}>
          <Image source={require('../../assets/images/plus.png')} style={styles.investButtonIcon}/>
          <Text style={[styles.investButtonText, { fontFamily: 'Poppins_400Regular' }]}>
          Invest More
          </Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loanButton}>
        <View style={styles.loanButtonContent}>
          <Image source={require('../../assets/images/loan.png')} style={styles.loanButtonIcon}/>
        <Text style={[styles.loanButtonText, { fontFamily: 'Poppins_400Regular' }]}>
        Get loan against your investments
        </Text>
      </View>
        </TouchableOpacity>

        {/* Footer Buttons */}
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.footerButton}>
          <View style={styles.portfolioButtonContent}>
          <Image source={require('../../assets/images/portfoliofooter.png')} style={styles.portfolioButtonIcon}/>
          <Text style={[styles.portfolioButtonText, { fontFamily: 'Poppins_400Regular' }]}>Portfolio</Text>
        </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
          <View style={styles.redeemButtonContent}>
          <Image source={require('../../assets/images/redeemfooter.png')} style={styles.redeemButtonIcon}/>
          <Text style={[styles.redeemButtonText, { fontFamily: 'Poppins_400Regular' }]}>Redeem</Text>
        </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
          <View style={styles.transButtonContent}>
          <Image source={require('../../assets/images/transactionfooter.png')} style={styles.transButtonIcon}/>
          <Text style={[styles.transButtonText, { fontFamily: 'Poppins_400Regular' }]}>Transactions</Text>
        </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}