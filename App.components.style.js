import {StyleSheet} from "react-native";
import color from "./contains/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    body: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: color.primary

    },
    items: {
        marginTop: 25
    },
    input: {}
});

export default styles;
