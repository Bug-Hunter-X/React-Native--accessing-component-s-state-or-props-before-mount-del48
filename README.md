# React Native: Accessing Component State/Props Before Mount

This repository demonstrates a common error in React Native: attempting to access a component's state or props before it has mounted.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

Accessing `this.props` or component state within the constructor or before a lifecycle method (like `componentDidMount` or `useEffect` with an empty dependency array) can lead to errors because the component hasn't fully initialized yet.  The props and state are undefined at this stage.

## Solution

The solution involves ensuring that you only access props and state after the component has fully mounted.  Use `useEffect` hook with an empty dependency array or lifecycle methods like `componentDidMount`. 