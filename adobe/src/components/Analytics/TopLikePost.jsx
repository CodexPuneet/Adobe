import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';

const TopLikePost = () => {
    const [topLikedPosts, setTopLikedPost] = useState([]);

    useEffect(()=>{
        axios.get("https://adobe-4gmw.onrender.com/analytics//posts/top-liked")
            .then((res)=>setTopLikedPost(res.data.topLikedPosts))
            .catch((e)=>console.log(e))
    },[])

  return (
    <Box>
        
        <Text fontFamily={'cursive'} fontSize={'2xl'} fontWeight={'bold'} color={'red'}>Top Posts :</Text>
        {
          topLikedPosts.map((el,i)=>{
            if(i==5)
            {
              return ;
            }
            return <Box> <Text>S.NO {i+1}:-{' '}{el.content}</Text>
                  </Box>
          })
        }

        
    </Box>
  )
}

export default TopLikePost