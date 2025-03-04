# 📚 Dimensional Arrays in JavaScript

## Overview
This example demonstrates how to work with **dimensional arrays** (2D and 3D arrays) in JavaScript.  
Dimensional arrays are arrays containing other arrays as elements, making it easy to store hierarchical or structured data.

---

## Explanation

### 1️⃣ Creating Simple Arrays
- `earnMoneyA` and `earnMoneyB` contain lists of skills related to making money.
- `growMoneyA` and `growMoneyB` contain lists of investment options.
- `giveMoney` contains causes related to giving back (in this case, education).

---

### 2️⃣ Accessing Individual Array Elements
- You can directly access array elements using **index numbers**.
- Example: Accessing the first skill in `earnMoneyA` and the second option in `growMoneyB`.

---

### 3️⃣ Two-Dimensional Arrays
- Arrays are combined into larger arrays: 
    - `earnMoney` holds both `earnMoneyA` and `earnMoneyB`.
    - `growMoney` holds both `growMoneyA` and `growMoneyB`.

- You access elements by using **two indices** — one for the outer array and one for the inner array.
- Example: Getting the first element in `earnMoneyA` via `earnMoney[0][0]`.

---

### 4️⃣ Three-Dimensional Arrays
- A 3D array is created by combining `earnMoney`, `growMoney`, and `giveMoney` into a larger array called `dhuddu`.

- You access elements using **three indices** — one for each level.
- Example: Getting the 3rd item in `earnMoneyA` via `dhuddu[0][0][2]`.

---

### Benefits of Dimensional Arrays
✅ Helps organize related data in a structured way.  
✅ Reduces need for individual variables for each list.  
✅ Useful for nested data (tables, matrices, or hierarchical data).  

---

### Summary
- **1D Array:** Single list of items.
- **2D Array:** Array of arrays (like a table with rows and columns).
- **3D Array:** Array of arrays of arrays (more hierarchical, like nested tables).

---
