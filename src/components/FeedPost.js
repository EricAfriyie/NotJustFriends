import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LikeImage from '../../assets/images/like.png';
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";





const FeedPost=({post})=> {
  

  
  return (
    

      <View style={styles.post}>
        {/*header*/} 
        <View style={styles.header}>
          <Image source={{uri:post.image}} 
          style={styles.profileImage}/>

          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>

          <Entypo 
          name="dots-three-horizontal" 
          size={18} 
          color="gray" 
          style={styles.icon} 
          />
         

        </View>
        {/*body*/}

        {post.description &&(
        <Text style={styles.description}>{post.description}</Text>)}

        {post.image &&(
          <Image 
          source={{ uri:post.image}} 
          style={styles.image}
          resizeMode="cover"
          />
          )}
        
        {/*footer*/}
        <View style={styles.footer}>
          {/*Stats row*/}
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon}/>
            <Text style={styles.likedBy}>
              Nana Adwoa and {post.numberOfLikes} others
            </Text>
            <Text style={styles.numberOfShares}>
              {post.numberOfShares} shares
            </Text>

          </View>


                    {/*buttons row */}
            <View style={styles.buttonsRow}>
            <View styles={styles.iconButton}>
              <AntDesign name='like2' size={18} color="gray"/>
              {/* <Text style={styles.iconButtonText}>Like</Text> */}
            </View>



            <View styles={styles.iconButton}>
              <FontAwesome5 name="comment-alt" size={16} color="gray"/>
              {/* <Text style={styles.iconButtonText}>Comment</Text> */}
            </View>



            <View styles={styles.iconButton}>
              <MaterialCommunityIcons name='share-outline' size={18} color="gray"/>
              {/* <Text style={styles.iconButtonText}>Share</Text> */}
            </View>
          </View>
        </View>
     
      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
     backgroundColor: '#fff',
    alignItems: 'center',
     justifyContent: 'center',
    

   },

  post:{
    
    marginVertical:5,
    backgroundColor:'#fff',

  },
  header:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    padding:10,


  },
  profileImage:{
    width:40,
    height:40,
    borderRadius:25,
    marginRight:10,

  },
  name:{
    fontWeight:"500",

  },

  subtitle:{
    color:"gray",

  },
  icon:{
    marginLeft:"auto",

  },

  description:{
    
    lineHeight:20,
    padding:10,

  },

  image:{
    width: '100%',
    
    aspectRatio: 1,
    

  },


  //Footer
  footer:{
    paddingHorizontal:10,
  },
  statsRow:{
    paddingVertical:10,
    flexDirection:"row",
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor:"lightgray",
    
  },
  likeIcon:{
    width:20,
    height:20,
    marginRight:5,
  },
  likedBy:{
    color:"gray",
  },
  numberOfShares:{
    color:"gray",
    marginLeft:"auto",
    
  },

//buttonsrow

buttonsRow:{
  marginVertical:10,
  flexDirection:"row",
  justifyContent:"space-between",


  
},

iconButton:{
  flexDirection:"row",
  alignItems:"center",

},
iconButtonText:{
  color:"gray",
  marginLeft:5,
  fontWeight:"500",
  
},
});


export default FeedPost;
