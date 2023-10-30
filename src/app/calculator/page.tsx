'use client'
import React, { useState } from 'react'
import CalculatorBody from './calculatorBody'
import {
  OperatorStringT,
  BtnTxtType,
} from '@/customTypes/types'

import { palette } from '@/constants/palette'

const initialState = {
  result: '',
  operation: '0',
}

const themes = [
  {
    background: '#3B4664',
    display: '#191F32',
    regularBtn: '#E9E3DC',
    regularBtnShadow: '#CCC6BF',
    clearBtn: '#647298',
    clearBtnShadow: '#4C567A',
    equalBtn: '#D13F30',
    equalBtnShadow: '#722B2C',
    themeSelectorBackground: '#242E42',
    regularBtnText: '#48474E',
    clearBtnText: palette.main.whiteBackground,
    displayText: palette.main.whiteBackground,
    equalBtnText: palette.main.whiteBackground,
    btnsContainer: '#272D42',
  },
  {
    background: '#e7e7e7',
    display: '#efefef',
    regularBtn: '#e7e3e0',
    regularBtnShadow: '#a7a097',
    clearBtn: '#398187',
    clearBtnShadow: '#226069',
    equalBtn: '#c85401',
    equalBtnShadow: '#923d03',
    themeSelectorBackground: '#d4cdcd',
    regularBtnText: '#43413d',
    clearBtnText: '#dcf4fb',
    displayText: '#3f4036',
    equalBtnText: palette.main.whiteBackground,
    btnsContainer: '#d4cdcd',
  },
  {
    background: '#170629',
    display: '#1d0836',
    regularBtn: '#331b4c',
    regularBtnShadow: '#75258c',
    clearBtn: '#55067c',
    clearBtnShadow: '#9f21cd',
    equalBtn: '#00dece',
    equalBtnShadow: '#00dece',
    themeSelectorBackground: '#1e0836',
    regularBtnText: '#EADB73',
    clearBtnText: '#E0CEE6',
    displayText: '#F6DA79',
    equalBtnText: '#005551',
    btnsContainer: '#1D0836',
  },
]

const operators = ['+', '-', '/', 'x']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function Calculator() {
  const [values, setValues] = useState(initialState)
  const [selectedThemeIndex, setSelectedThemeIndex] = useState<0 | 1 | 2>(0)

  const themeChangeHandler = () => {
    setSelectedThemeIndex((prev) =>
      prev === 2 ? 0 : ((prev + 1) as 0 | 1 | 2)
    )
  }

  const operateNumbers = (
    n1: string,
    n2: string,
    operator: OperatorStringT
  ): number => {
    switch (operator) {
      case '+':
        return Number(n1) + Number(n2)
      case '-':
        return Number(n1) - Number(n2)
      case 'x':
        return Number(n1) * Number(n2)
      case '/':
        return Number(n1) / Number(n2)
    }
  }

  const getResultFromOpString = (operation: string): number => {//Given an operation string, return a result
    let acc = 0
    let operator: OperatorStringT = '+'
    let lastOperatorIndex = -1
    if (operators.includes(operation[operation.length-1])){
      operation = operation.slice(0, operation.length - 1) // ignore last character if it is an operator
    }

    for (let i = 0; i < operation.length; i++) {
      let character = operation[i]
      if (
        character === '+' ||
        character === '-' ||
        i === operation.length - 1
      ) {
        const end = i === operation.length - 1 ? operation.length : i
        acc = operateNumbers(
          acc.toString(),
          operation.slice(lastOperatorIndex + 1, end),
          operator
        )
        if (character === '+' || character === '-') {
          operator = character as OperatorStringT
          lastOperatorIndex = i
        }
      }
      else if (character === 'x' || character === '/'){
        let thisAcc = Number(operation.slice(lastOperatorIndex + 1, i))
        let thisLastOperatorIndex = i
        let thisOperator: OperatorStringT = character as OperatorStringT
        for(let j = i+1; j < operation.length; j++){
          const thisCharacter = operation[j]
          if (thisCharacter === 'x' || thisCharacter === '/' || thisCharacter === '+' || thisCharacter === '-' || j === operation.length - 1){
            const end = j === operation.length - 1 ? operation.length : j
            thisAcc = operateNumbers(
              thisAcc.toString(),
              operation.slice(thisLastOperatorIndex + 1, end),
              thisOperator
            )
            if (thisCharacter === 'x' || thisCharacter === '/'){
              thisOperator = thisCharacter as OperatorStringT
              thisLastOperatorIndex = j
            }
            else if (thisCharacter === '+' || thisCharacter === '-' || j === operation.length - 1){
              i = j
              lastOperatorIndex = i
              j = operation.length - 1
              acc = operateNumbers(
                acc.toString(),
                thisAcc.toString(),
                operator
              )
              if (thisCharacter === '+' || thisCharacter === '-'){
                operator = thisCharacter
              }
          }
          }
        }
      }

    }
    return acc
  }


  function onBtnClickHandler(value: BtnTxtType) {
    setValues((prev) => {
      const lastCharacter = prev.operation[
        prev.operation.length - 1
      ] as BtnTxtType

      if (value === 'RESET') {
        return initialState
      }

      if (value === 'DEL') {
        const operation = prev.operation.length === 1
        ? '0'
        : prev.operation.slice(0, prev.operation.length - 1)
        const result = getResultFromOpString(operation).toString()
        return {
          ...prev,
          operation,
          result
        }
      }

      if (value === '=') {
        const result = getResultFromOpString(prev.operation).toString()
        return {
          ...prev,
          result: '',
          operation: result
        }
      }

      if (operators.includes(value)) {
        const toConcat = prev.operation.length === 0 ? `0${value}` : value
        const newOparation = (
          operators.includes(lastCharacter)
            ? prev.operation.slice(0, prev.operation.length - 1)
            : prev.operation
        ).concat(toConcat)
        return { ...prev, operation: newOparation }
      }

      if (numbers.includes(value)) {
        const newOperation =
          prev.operation === '0' ? value : `${prev.operation}${value}`
        return { ...prev, operation: newOperation, result: getResultFromOpString(newOperation).toString() }
      }

      if (value === '.' && lastCharacter !== '.') {
        let canAdd = true

        if (prev.operation.length > 0 && numbers.includes(lastCharacter)) {
          let lastOperatorIndex = -1
          for (let i = prev.operation.length - 1; i > 0; i--) {
            if (operators.includes(prev.operation[i])) {
              lastOperatorIndex = i
              break
            }
          }
          const currentNumberString = prev.operation.slice(
            lastOperatorIndex + 1
          )
          if (currentNumberString.includes('.')) {
            canAdd = false
          }
        }

        if (canAdd) {
          const toConcat =
            prev.operation.length === 0 || operators.includes(lastCharacter)
              ? '0.'
              : '.'
          return { ...prev, operation: prev.operation.concat(toConcat) }
        }
      }

      return prev
    })
  }

  return (
    <CalculatorBody
      theme={themes[selectedThemeIndex]}
      label1={values.operation}
      result={values.result}
      onBtnClickHandler={onBtnClickHandler}
      themeIndex={selectedThemeIndex}
      themeChangeHandler={themeChangeHandler}
    />
  )
}
