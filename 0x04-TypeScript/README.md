# 📘 0x04. TypeScript

> **ALX Frontend JavaScript Project**  
> Learn, configure, and apply TypeScript to build type-safe, maintainable, and scalable JavaScript applications.

---

## 🧠 Overview

This project introduces **TypeScript**, a superset of JavaScript that brings **static typing**, **interfaces**, **classes**, and **compile-time checks** to improve developer productivity and code quality.  
Through this project, you will learn how to configure TypeScript, define types and interfaces, leverage advanced typing techniques, and integrate TypeScript with modular application design.

---

## 🛠️ Project Setup

Each task directory (`task_0`, `task_1`, `task_2`, etc.) includes:

- `package.json`
- `webpack.config.js`
- `tsconfig.json`

### ⚙️ Installation

```bash
# Install dependencies
npm install
````

### 🧩 Build Project

```bash
npm run build
```

---

## 🚀 Tasks Breakdown

### **0. Creating an Interface for a Student**

**File:** `task_0/js/main.ts`
Defines an interface `Student` and dynamically renders a student list table.

- Create `Student` interface with:

  - `firstName`, `lastName`, `age`, `location`
- Store two students in an array
- Use **Vanilla JS** to render a table with their names and locations.

🧩 *Concepts:* Interfaces, Arrays, DOM rendering.

---

### **1. Extending the Teacher Class**

**File:** `task_1/js/main.ts`
Implements `Teacher` and `Directors` interfaces and extends functionality.

- Define `Teacher` interface with:

  - `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience?`, `location`
- Define `Directors` interface extending `Teacher` with:

  - `numberOfReports: number`

🧩 *Concepts:* Interface inheritance, optional properties.

---

### **2. Printing Teachers**

Adds a `printTeacherFunction` interface and an implementation:

- Function signature: `(firstName: string, lastName: string) => string`
- Returns: `J. Doe` for `printTeacher("John", "Doe")`.

🧩 *Concepts:* Function interfaces and type signatures.

---

### **3. Writing a Class**

Defines a `StudentClass` implementing an interface-based constructor.

- Methods:

  - `workOnHomework()` → `"Currently working"`
  - `displayName()` → returns `firstName`
- Constructor defined through an interface.

🧩 *Concepts:* Classes, method typing, constructor interfaces.

---

### **4. Advanced Types Part 1**

**File:** `task_2/js/main.ts`
Implements classes and functions using interface-based design.

- Create:

  - `DirectorInterface` and `TeacherInterface`
- Define `Director` and `Teacher` classes implementing respective interfaces
- `createEmployee(salary)` returns:

  - `Teacher` if `salary < 500`
  - `Director` otherwise

🧩 *Concepts:* Interfaces, class implementation, union types.

---

### **5. Creating Functions Specific to Employees**

- Function `isDirector(employee)` acts as a type predicate.
- Function `executeWork(employee)` calls:

  - `workDirectorTasks()` if Director
  - `workTeacherTasks()` if Teacher

🧩 *Concepts:* Type narrowing, discriminated unions, runtime checking.

---

### **6. String Literal Types**

Defines a `Subjects` type:

```ts
type Subjects = "Math" | "History";
```

- Function `teachClass(todayClass: Subjects)` returns:

  - `"Teaching Math"` or `"Teaching History"`

🧩 *Concepts:* String literal types, type-safe conditionals.

---

### **7. Ambient Namespaces**

**Files:**

- `task_3/js/interface.ts`
- `task_3/js/crud.d.ts`
- `task_3/js/main.ts`

Implements ambient type declarations for a CRUD library.

- Define:

  - `type RowID = number`
  - `interface RowElement { firstName, lastName, age? }`
- Declare types for external CRUD functions (`insertRow`, `updateRow`, `deleteRow`).
- Demonstrate updating and deleting rows using TypeScript types.

🧩 *Concepts:* Ambient declarations, `.d.ts` files, third-party typings.

---

### **8. Namespace & Declaration Merging**

**Files:**

- `task_4/js/subjects/Teacher.ts`
- `task_4/js/subjects/Subject.ts`
- `task_4/js/subjects/Cpp.ts`
- `task_4/js/subjects/React.ts`
- `task_4/js/subjects/Java.ts`

Implements **declaration merging** inside a `Subjects` namespace.

- Base `Teacher` interface and `Subject` class
- Subclasses `Cpp`, `React`, and `Java` extend `Subject`
- Each adds its own experience property and implements:

  - `getRequirements()`
  - `getAvailableTeacher()`

🧩 *Concepts:* Namespaces, declaration merging, inheritance.

---

### **9. Updating main.ts**

**File:** `task_4/js/main.ts`

- Import subjects (`Cpp`, `Java`, `React`)
- Create instances and one teacher `cTeacher`
- Log subject names and method outputs

🧩 *Concepts:* Namespaced imports, class composition.

---

### **10. Brand Convention & Nominal Typing**

**File:** `task_5/js/main.ts`

Implements *nominal typing* via branded interfaces.

- Define:

  - `MajorCredits` (`__brand: 'major'`)
  - `MinorCredits` (`__brand: 'minor'`)
- Create:

  - `sumMajorCredits()` returning a `MajorCredits` type
  - `sumMinorCredits()` returning a `MinorCredits` type

🧩 *Concepts:* Nominal typing, brand patterns, type safety.

---

## 🧪 Example Usage

```bash
npm run build
node dist/main.js
```

**Expected Output Example:**

```bash
Insert row { firstName: 'Guillaume', lastName: 'Salva' }
Update row 125 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }
Delete row id 125
C++
Here is the list of requirements for Cpp
Available Teacher: Guillaume
Java
Here is the list of requirements for Java
Available Teacher: Guillaume
React
Here is the list of requirements for React
Available Teacher: Guillaume
```

---

## 📚 Key TypeScript Concepts Practiced

| Concept                              | Description                                  |
| ------------------------------------ | -------------------------------------------- |
| **Interfaces & Types**               | Defining contracts for objects and functions |
| **Classes & Inheritance**            | Object-oriented design in TypeScript         |
| **Type Guards**                      | Narrowing down union types safely            |
| **Namespaces & Declaration Merging** | Structuring and merging declarations         |
| **Ambient Declarations (.d.ts)**     | Typing external JS libraries                 |
| **String Literal Types**             | Restricting allowed string values            |
| **Brand/Nominal Typing**             | Differentiating structurally identical types |
| **Generics & Reusability**           | Reusable components with flexible types      |

---

## 🧰 Tools & Configuration

- **TypeScript** — Typed superset of JavaScript
- **Webpack** — Bundler for compiling TS into JS
- **ESLint** — Linting and style enforcement
- **Node.js & npm** — Package and build management

---

## 🏁 Final Thoughts

This project solidifies TypeScript fundamentals, exploring everything from basic typing to advanced namespace design and nominal typing.
