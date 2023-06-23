import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ElevatedCards from './ElevatedCards'
import FancyCard from './FancyCard'
import ContactList from './ContactList'
import ActionCard from './ActionCard'

const Project12 = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <FlatCards />
                    <ElevatedCards />
                    <FancyCard />
                    <ContactList />
                    <ActionCard />
                    {/* <GoogleLogin /> */}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Project12