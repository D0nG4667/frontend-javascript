// Brand-based interfaces to enforce nominal typing
export interface MajorCredits {
  credits: number;
  readonly __brand: 'major';
}

export interface MinorCredits {
  credits: number;
  readonly __brand: 'minor';
}

// Factory helpers (optional) to create branded values
export function createMajorCredits(value: number): MajorCredits {
  return { credits: value, __brand: 'major' };
}

export function createMinorCredits(value: number): MinorCredits {
  return { credits: value, __brand: 'minor' };
}

// Sum functions — accept two same-typed subjects and return branded type
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const total = subject1.credits + subject2.credits;
  return createMajorCredits(total);
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const total = subject1.credits + subject2.credits;
  return createMinorCredits(total);
}

/* Example usage (uncomment to test)
const a = createMajorCredits(3);
const b = createMajorCredits(4);
const majorTotal = sumMajorCredits(a, b);
console.log(majorTotal); // { credits: 7, __brand: 'major' }

const x = createMinorCredits(2);
const y = createMinorCredits(5);
const minorTotal = sumMinorCredits(x, y);
console.log(minorTotal); // { credits: 7, __brand: 'minor' }
*/

// Note: Trying to mix MajorCredits and MinorCredits in the sum functions will
// produce a type error, enforcing nominal distinction at compile time.
