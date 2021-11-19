import { Add, Substract, Multiplication } from "../Math";

test("Return sum of two arguments", () => {
  // Arrange
  const firstNumber = 5;
  const secondNumber = 15;
  const expectedOutput = 20;

  // Act
  const actualOutput = Add(firstNumber, secondNumber);

  // Assert
  expect(actualOutput).toBe(expectedOutput);
});

test("Return substraction of a - b", () => {
  // Arrange
  const firstNumber = 20;
  const secondNumber = 5;
  const expectedOutput = 15;

  // Act
  const actualOutput = Substract(firstNumber, secondNumber);

  // Assert
  expect(actualOutput).toBe(expectedOutput);
});

test("Return multiplication of two arguments", () => {
  // Arrange
  const firstNumber = 4;
  const secondNumber = 3;
  const expectedOutput = 12;

  // Act
  const actualOutput = Multiplication(firstNumber, secondNumber);

  // Assert
  expect(actualOutput).toBe(expectedOutput);
});
