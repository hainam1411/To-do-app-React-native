import {StyleSheet} from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    even: {
        backgroundColor: color.green
    },
    odd: {
      backgroundColor: color.secondary
    },
    number: {
        fontWeight: '700',
        fontSize: 16,
        color: color.white
    },
    content: {
        width: '80%',
        fontSize: 16
    },
    input: {}
});

export default styles;
