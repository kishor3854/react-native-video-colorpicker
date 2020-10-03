import React, {Component} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Text,
  Share,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {videosActions} from './redux/video/reducer';
import {bindActionCreators, Dispatch} from 'redux';

class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoPlayCount: 1,
      duration: 0.0,
      currentTime: 0.0,
      resizeMode: 'stretch',
      paused: true,
      pausedText: <Icon.Button name="ios-play" />,
      hideControls: false,
      loading: false,
      isRefreshing: false,
      video: 0,
      data: this.props.data,
      isLoading: false,
    };
  }

  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.getVideos();
      this.setState({isLoading: true});
    }
  }

  shareVideo = async url => {
    try {
      const result = await Share.share({
        message: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Video Shared');
        } else {
          console.log('Video Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismiss');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  goIndex = () => {
    this.flatList_Ref.scrollToIndex({index: 1});
  };

  onPressBtnPlay() {
    var pausedText = '';
    if (!this.state.paused) {
      pausedText = <Icon.Button name="ios-play" />;
      this.timeoutHandle = setTimeout(() => {
        this.setState({hideControls: true});
      }, 2000);
    } else {
      pausedText = <Icon.Button name="ios-pause" />;

      // hide controls after 3s
      this.timeoutHandle = setTimeout(() => {
        this.setState({hideControls: true});
      }, 2000);
    }
    this.setState({paused: !this.state.paused, pausedText: pausedText});
  }

  onPressVideo() {
    if (this.state.hideControls) {
      this.setState({hideControls: false});
      this.timeoutHandle = setTimeout(() => {
        this.setState({hideControls: true});
      }, 2000);
    }
  }

  render() {
    return this.props.isLoading ? (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          bottom: 0,
          alignItems: 'center',
          backgroundColor: '#EFF7F9',
        }}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <FlatList
        data={this.state.data}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
        ref={ref => {
          this.flatList_Ref = ref;
        }}
        renderItem={({item, index}) => (
          <View style={{marginTop: 20, marginBottom: 20, height: hp('30%')}}>
            <View style={styles.mainView}>
              <TouchableOpacity
                onLongPress={() => this.shareVideo(item.video_url)}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: '90%',
                    borderRadius: 20,
                  }}>
                  <TouchableWithoutFeedback
                    style={styles.fullScreen}
                    onPress={() => this.onPressVideo()}>
                    <Video
                      source={{uri: item.video_url}}
                      ref={ref => {
                        this.player = ref;
                      }}
                      paused={this.state.paused}
                      resizeMode={this.state.resizeMode}
                      style={styles.fullScreen}
                      onBuffer={this.onBuffer}
                      onError={this.videoError}
                      poster={item.thumbnail_url}
                      posterResizeMode={'stretch'}
                      resizeMode={'cover'}
                    />
                  </TouchableWithoutFeedback>

                  {!this.state.hideControls ? (
                    <View
                      onPress={() => this.onPressBtnPlay()}
                      style={{alignSelf: 'center', top: hp('10%')}}>
                      <Icon.Button onPress={() => this.onPressBtnPlay()}>
                        {this.state.pausedText}
                      </Icon.Button>
                    </View>
                  ) : null}
                </View>
                <View style={styles.lowerContainer}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={{color: 'blue', left: 10, top: 10}}>New</Text>
                    <Text style={{color: 'red', right: 10, top: 10}}>
                      1hr ago
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      left: 10,
                      top: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'red', left: 10, top: 25}}>
                    Simform company
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.goIndex}
      />
    );
  }
}

var styles = StyleSheet.create({
  mainView: {
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    height: hp('20%'),
  },
  lowerContainer: {
    bottom: 20,
    width: wp('90%'),
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    height: hp('10%'),
    shadowOffset: {height: hp('0.7%'), width: wp('0.5%')},
    shadowOpacity: 0.2,
    shadowColor: 'grey',
    elevation: 2,
  },
  container: {
    flex: 1,
    //flexDirection:'row',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },

  controls: {
    width: '100%',
    opacity: 0.7,
    position: 'absolute',
    left: 0,
  },
  playButton: {
    position: 'absolute',
    marginTop: 100,
  },
  progress: {
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  playControl: {
    // backgroundColor:'red',
    // position: 'relative',
    //top: hp('7%'),
    // width: wp('50%'),
    alignItems: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({videos}) => {
  return {...videos};
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...videosActions.Creators,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoScreen);
