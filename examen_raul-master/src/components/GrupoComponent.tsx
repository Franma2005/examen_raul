import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeSwitch } from '../redux/slices/riegoSlice';
import { SistemasRiego } from '../entities/sistemasRiego';

interface Props {
    item: SistemasRiego;
}

const GrupoComponent = ({ item }: Props) => {
    const dispatch = useDispatch();

    // Accede a `switchValues` y `riego` desde el estado global
    const switchValues = useSelector((state: any) => state.riego.switchValues);

    return (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.lastDate}</Text>
            {item.values.map((value, index) => (
                <View key={index}>
                    <Text>{value.name}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={switchValues[index] ? '#f5dd4b' : '#f4f3f4'}  // Usa `switchValues` para el color del switch
                        onValueChange={() => {
                            // Cambia el estado del switch en `switchValues` en base al índice
                            dispatch(setChangeSwitch({ index, newState: !switchValues[index], itemName: item.name }));
                        }}
                        value={switchValues[index]}  // Usa el valor de `switchValues` correspondiente al índice
                    />
                </View>
            ))}
        </View>
    );
};

export default GrupoComponent;