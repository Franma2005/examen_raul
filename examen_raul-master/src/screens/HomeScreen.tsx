import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useGetValvulaRiegoQuery, usePostValvulaRiegoMutation } from '../redux/slices/apiSlices'
import { useDispatch, useSelector } from 'react-redux'
import { setRiego } from '../redux/slices/riegoSlice'
import GrupoComponent from '../components/GrupoComponent'
import { Value } from '../entities/sistemasRiego'
import { RootState } from '../redux/store'

const HomeScreen = () => {
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetValvulaRiegoQuery({});
    const [postValvulaRiego] = usePostValvulaRiegoMutation();

    useEffect(() => {
        if (data) {
            dispatch(setRiego(data));
            console.log("datos puesto" + JSON.stringify(data));
        }
    }, [data]);

    const riego = useSelector((state: RootState) => state.riego.grupos);
    console.log(riego);
    return (
        <View style={{ marginTop: 40 }}>
            {
                isLoading ? (
                    <Text style={{ paddingTop: 10 }}>Cargando datos...</Text>
                ) : error ? (
                    <Text style={{ paddingTop: 10 }}>Fallo en la conexion</Text>
                ) : !data ? (
                    <Text style={{ paddingTop: 10 }}>No hay datos disponibles</Text>
                ) :
                    <FlatList
                        data={riego}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => (
                            <View>
                                <Text>Bloste</Text>
                                <GrupoComponent item={item} onUpdate={postValvulaRiego} />
                            </View>
                        )}

                    />
            }
        </View>
    )
}

export default HomeScreen;