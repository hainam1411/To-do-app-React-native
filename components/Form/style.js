import {StyleSheet} from "react-native";
import color from "../../contains/color";
const styles = StyleSheet.create({

    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: color.primary,
        paddingHorizontal: 10
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: color.primary,
        borderWidth: 2
    },
    icon: {
        fontSize: 25,
        color: '#fff'
    }
})
export default styles;
