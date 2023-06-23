import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'Should be 4 character minimum')
        .max(16, 'Should be 16 character maximum')
        .required('Length is required')
})
const Project3 = () => {
    const [password, setPassword] = useState('')
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setUpperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePasswordString = (passwordLength: number) => {

    }

    const createPassword = (passwordLength: number, characters: string) => {
        let result = ''
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result

    }

    const resetPasswordState = () => {

    }

    return (
        <View>
            <Text>Yup</Text>
        </View>
    )
}

export default Project3

const styles = StyleSheet.create({})