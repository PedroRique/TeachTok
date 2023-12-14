import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ActivityIcon from './../../../assets/icons/Activity.svg';
import SearchIcon from './../../../assets/icons/Search.svg';
import { styles } from './styles';

export const Topbar = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.topbarContainer}>
        <View style={styles.timerContainer}>
          <ActivityIcon fill={'#ffffff99'} />
          <Text style={styles.timerText}>10m</Text>
        </View>

        <View style={styles.forYouContainer}>
          <Text style={styles.forYouText}>For You</Text>
          <View style={styles.forYouBar} />
        </View>
        <View style={styles.searchContainer}>
          <SearchIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};
