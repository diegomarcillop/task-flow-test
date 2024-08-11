import { getRandomNumber } from './getRandomNumber'

export const colors = [
  'bg-red-300',
  'bg-orange-300',
  'bg-amber-300',
  'bg-yellow-300',
  'bg-lime-300',
  'bg-green-300',
  'bg-emerald-300',
  'bg-teal-300',
  'bg-cyan-300',
  'bg-sky-300'
]

export const getColor = () => {
  return colors[getRandomNumber(1, 10)]
}
