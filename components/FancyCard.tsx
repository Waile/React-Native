import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: "https://picsum.photos/seed/picsum/200/300"
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Clear Sky</Text>
                    <Text style={styles.cardLabel}>Wapda Town, Lahore</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sint. necessitatibus?</Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 330,
        height: 350,
        borderRadius: 15,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    cardBody: {
        color: "#000000",
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: "#000000",
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: "#242B2E",
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
        marginTop: 6,
    },
    cardFooter: {
        color: "#000000",
        marginBottom: 4,
    },

})