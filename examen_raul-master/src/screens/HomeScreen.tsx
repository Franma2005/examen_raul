import { View, Text, Switch, FlatList } from 'react-native'
import React from 'react'
import { useGetValvulaRiegoQuery } from '../redux/slices/apiSlices'
import { useDispatch } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch();
    
    const { data, error, isLoading } = useGetValvulaRiegoQuery();
  
   return (
    <View>
        {
        isLoading ? (
            <Text>Cargando datos...</Text>
        ) : error ? (
            <Text>Fallo en la conexion</Text>
        ) : !data ? (
            <Text>No hay datos disponibles</Text>
        ) :
        <View>
            
                
        </View>
    }
    </View>
  )
}

export default HomeScreen;