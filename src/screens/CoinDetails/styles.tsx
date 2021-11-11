import {StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  itemtext: {color: Colors.foreground},
  textr: {color: Colors.foreground},
  addtoPortfolio: {
    backgroundColor: Colors.foreground,
    marginTop: 30,
    borderWidth: 0,
  },
  choose_network: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.foreground,
  },
  chain_note: {
    textAlign: 'center',
    color: Colors.lighter,
    width: '80%',
    alignSelf: 'center',
    fontSize: 12,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.foreground,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 0,
  },
  logoimg: {
    width: 25,
    height: 25,
    marginRight: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.9,
    marginVertical: 5,
  },
  viewStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.darker,
    paddingVertical: 5,
  },
  coingecko: {
    marginLeft: 20,
    marginBottom: 50,
    marginTop: 10,
    fontSize: 11,
    color: 'gray',
  },
  viewStatsDetail: {
    paddingHorizontal: 20,
    backgroundColor: Colors.darker,
    marginVertical: 1,
    paddingBottom: 20,
  },
  txtBg: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 30,
    position: 'absolute',
    fontWeight: 'bold',
    zIndex: -1,
    opacity: 0.2,
    width: '100%',
  },
  subcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
  },
  linechart: {
    justifyContent: 'center',
    height: 160,
    marginTop: 0,
    paddingHorizontal: 0,
  },
  chart: {
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 10,
  },
  title2: {
    fontSize: 14,
    fontFamily: 'RobotoSlab-Bold',
    color: 'white',
    marginTop: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  change: {
    color: Colors.inverse,
    textAlign: 'center',
    padding: 3,
    marginTop: 3,
    fontFamily: 'RobotoSlab-Bold',
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
  },
  subTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'RobotoSlab-Bold',
    color: Colors.foreground,
    marginLeft: 20,
  },
  subTitleTop: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
    color: Colors.foreground,
    marginLeft: 20,
    marginTop: 10,
  },
  smallContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginVertical: 10,
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: Colors.foreground,
  },
  smallTitle: {
    fontSize: 16,
    fontFamily: 'RobotoSlab-Bold',
    marginBottom: 5,
    color: Colors.foreground,
  },
});
