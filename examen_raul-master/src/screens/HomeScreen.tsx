import { View, Text, Switch, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useGetValvulaRiegoQuery } from '../redux/slices/apiSlices'
import { useDispatch, useSelector } from 'react-redux'
import { setRiego } from '../redux/slices/riegoSlice'
import GrupoComponent from '../components/GrupoComponent'

const HomeScreen = () => {
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetValvulaRiegoQuery();


    useEffect(() => {
        if (data) {
            dispatch(setRiego(data));
        }
    }, [data]);



    const riego = useSelector((state: any) => state.riego.riego);

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
                        <FlatList
                            data={riego}
                            renderItem={({ item }) =>
                                <GrupoComponent item={item} />
                            }
                        />
                    </View>
            }
        </View>
    )
}

export default HomeScreen;