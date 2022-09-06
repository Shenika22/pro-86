return (
    <View style={style.container}>
    <SafeAreaView style = {styles.droidSafeArea} />
    <View style= {styles.appTitle}>
    <View style= {styles.appIcon}
    <Image
    source={require("../assets/logo.png")}
    style={styles.iconImage}
    ></Image>
    </View>
    <View style={styles.appTitleTextContainer}>
    <Text style={styles.appTitleText}>Spectagram</Text>
    </View>
    </View><View style{styles.cardContainer}>
    <FlatList
    keyExtractor={this.keyExtractor}
    data={posts}
    renderItem={this.renderItem}
    />
    </View>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      background: "black"
    },
    droidSafeArea: {
      marginTop: PLatform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flew:0.2,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height:"100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.8,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
    },
    cardContainer:{
      flex: 0.85
    }
  });

  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />;
  }