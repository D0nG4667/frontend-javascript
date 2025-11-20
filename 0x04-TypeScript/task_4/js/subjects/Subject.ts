namespace Subjects {
  // ✅ Interface Subject with setTeacher signature
  export interface Subject {
    setTeacher(teacher:Teacher) : void;
  }

  // ✅ Class Subject implements the interface
  export class Subject implements Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}