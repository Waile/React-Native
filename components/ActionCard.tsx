import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in Javascript 21 </Text>
                </View>
                <Image source={{
                    uri: 'https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-kitten-standing-atop-wall-under-blue-sky.jpeg',
                }}
                    style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aperiam doloremque eaque ea illum, quam atque nam mollitia dignissimos non delectus dolorum provident, eum quas quia dolor ipsam assumenda sunt.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 330,
        height: 370,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07c24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    headerText: {
        color: "#000",
        fontWeight: "600",
        fontSize: 16
    },
    cardImage: { height: 190 },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    socialLinks: {
        fontSize: 16,
        color: "#000000",
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    },

})