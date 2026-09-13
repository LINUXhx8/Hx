import { CLevel, TimelineWeek, ResourceItem } from '../types';

export const C_LEVELS: CLevel[] = [
  {
    levelNumber: 1,
    title: 'Foundations',
    tagline: 'Introduction to C, compilation mechanics & core syntax',
    estimatedTime: 'Weeks 1–2',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    sections: [
      {
        id: 'intro-c',
        title: 'Introduction to C',
        subtopics: [
          {
            id: 'l1-history',
            title: 'History and features of C',
            details: [
              'Created by Dennis Ritchie at Bell Labs (1972)',
              'Procedural, low-level memory access, high execution speed',
              'Foundation of modern operating systems (Linux kernel, Windows, macOS, Git)',
            ],
          },
          {
            id: 'l1-compiler',
            title: 'Compiler vs. interpreter; how C compiles',
            details: [
              'Step 1: Preprocessor (handles #include, #define macros, comments stripping)',
              'Step 2: Compiler (translates C code into assembly language)',
              'Step 3: Assembler (converts assembly to machine object code .o / .obj)',
              'Step 4: Linker (binds object files and libraries into executable)',
            ],
          },
          {
            id: 'l1-env',
            title: 'Setting up environment (GCC/Clang, IDEs: VS Code, Code::Blocks)',
            details: [
              'Installing GCC via MinGW (Windows), Xcode tools (macOS), or build-essential (Linux)',
              'Configuring VS Code with C/C++ extension and clang-format',
              'Alternative lightweight IDEs: Code::Blocks, CLion',
            ],
          },
          {
            id: 'l1-structure',
            title: 'Structure of a C program, main(), compilation & execution',
            details: [
              'Standard signature: int main(int argc, char *argv[])',
              'Command line compile: gcc -Wall -Wextra -O2 main.c -o program',
              'Execution: ./program (returns 0 for successful termination)',
            ],
          },
        ],
      },
      {
        id: 'basics-c',
        title: 'Basics',
        subtopics: [
          {
            id: 'l1-tokens',
            title: 'Tokens, keywords, identifiers',
            details: [
              '32 standard keywords (auto, break, case, const, sizeof, struct, etc.)',
              'Identifiers naming rules (letters, digits, underscores; cannot start with a digit)',
              'Tokens classification: keywords, identifiers, constants, string literals, symbols',
            ],
          },
          {
            id: 'l1-datatypes',
            title: 'Data types (int, char, float, double, void, qualifiers)',
            details: [
              'Primary types: int (4 bytes), char (1 byte), float (4 bytes), double (8 bytes)',
              'Qualifiers: signed, unsigned, short, long, long long',
              'Immutability: const qualifier, volatile for hardware/compiler flags',
            ],
          },
          {
            id: 'l1-vars-const',
            title: 'Variables and constants, #define vs const',
            details: [
              'Variable declaration, memory allocation and initialization',
              '#define preprocessor constant substitution (textual replace, no type check)',
              'const int MAX = 100; (typed, scoped, memory-allocated constant)',
            ],
          },
          {
            id: 'l1-io',
            title: 'Input/output: printf, scanf, format specifiers, escape sequences',
            details: [
              'printf() and scanf() with address-of operator & (e.g. scanf("%d", &val))',
              'Format specifiers: %d, %i, %f, %lf, %c, %s, %p, %x, %u, %zu',
              'Escape sequences: \\n (newline), \\t (tab), \\0 (null char), \\\\, \\"',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'First C Program & Compilation Flow',
      description: 'Standard C99/C11 hello world demonstrating header inclusion, main(), and formatted I/O.',
      code: `#include <stdio.h>

#define COURSE_CODE "CODE9"
const int CURRENT_YEAR = 2026;

int main(void) {
    char instructor[] = "Hari";
    int levels = 7;

    // Formatted standard output
    printf("[%s] Welcome to C Language Mastery with %s!\\n", COURSE_CODE, instructor);
    printf("Total curriculum levels: %d | Year: %d\\n", levels, CURRENT_YEAR);

    return 0; // 0 indicates successful execution
}`,
    },
  },
  {
    levelNumber: 2,
    title: 'Operators & Control Flow',
    tagline: 'Logical branching, bitwise arithmetic & procedural control',
    estimatedTime: 'Weeks 1–2',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
    sections: [
      {
        id: 'operators-c',
        title: 'Operators',
        subtopics: [
          {
            id: 'l2-arith-rel-log',
            title: 'Arithmetic, relational, logical',
            details: [
              'Arithmetic: +, -, *, /, % (modulus only for integers)',
              'Relational: ==, !=, >, <, >=, <= (evaluates to 1 true or 0 false)',
              'Logical: && (AND), || (OR), ! (NOT) with short-circuit evaluation',
            ],
          },
          {
            id: 'l2-bitwise',
            title: 'Bitwise (& | ^ ~ << >>)',
            details: [
              '& (Bitwise AND), | (Bitwise OR), ^ (Bitwise XOR), ~ (Bitwise NOT)',
              '<< (Left shift - fast multiply by 2^n), >> (Right shift - fast divide by 2^n)',
              'Masking techniques, toggling bits, and checking parity',
            ],
          },
          {
            id: 'l2-assign-misc',
            title: 'Assignment, increment/decrement, ternary, sizeof, comma operator',
            details: [
              'Compound assignment: +=, -=, *=, /=, %=, &=, |=, <<=',
              'Pre vs Post increment/decrement: ++i vs i++',
              'Ternary conditional: condition ? val_if_true : val_if_false',
              'sizeof(type_or_var) returns size_t byte count at compile time',
              'Comma operator: sequential evaluation left-to-right',
            ],
          },
          {
            id: 'l2-precedence',
            title: 'Type conversion and casting, operator precedence',
            details: [
              'Implicit coercion vs explicit type casting (double)sum / count',
              'Precedence table: postfix -> unary -> multiplicative -> additive -> bitwise -> relational -> logical',
              'Using parentheses to ensure evaluation order and eliminate bugs',
            ],
          },
        ],
      },
      {
        id: 'control-statements-c',
        title: 'Control Statements',
        subtopics: [
          {
            id: 'l2-branching',
            title: 'if, if-else, nested if, switch-case',
            details: [
              'Conditional branching with if, else if, else',
              'switch(expression) with discrete integral cases and default',
              'Importance of break statement in switch to prevent accidental fallthrough',
            ],
          },
          {
            id: 'l2-loops',
            title: 'Loops: for, while, do-while',
            details: [
              'for(init; condition; update) - counter-based loops',
              'while(condition) - entry-controlled loop',
              'do { ... } while(condition); - exit-controlled loop (runs at least once)',
            ],
          },
          {
            id: 'l2-jump',
            title: 'break, continue, goto',
            details: [
              'break: immediate exit from loop or switch',
              'continue: skips rest of current iteration to next condition check',
              'goto and label: why to avoid in normal code, except clean-up error handling',
            ],
          },
          {
            id: 'l2-practice',
            title: 'Practice: pattern printing, number problems, loops drills',
            details: [
              'Prime number verification & Sieve of Eratosthenes',
              'Fibonacci series generation (iterative vs recurrence)',
              'Armstrong numbers, palindrome checking, digit reversal',
              'Pyramid and diamond star pattern printing algorithms',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'Bitwise Masks & Control Flow Drill',
      description: 'Checking bits and implementing prime number check with loops.',
      code: `#include <stdio.h>
#include <stdbool.h>

bool is_prime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main(void) {
    int flags = 0b00101101; // binary literal (C99/C11)
    int mask = 1 << 3;      // 4th bit mask

    // Bitwise check
    if (flags & mask) {
        printf("Bit 3 is SET\\n");
    }

    // Loop check for primes
    for (int num = 10; num <= 20; num++) {
        if (is_prime(num)) {
            printf("%d is PRIME\\n", num);
        }
    }
    return 0;
}`,
    },
  },
  {
    levelNumber: 3,
    title: 'Functions & Arrays',
    tagline: 'Modular program decomposition, recursion & sequential memory blocks',
    estimatedTime: 'Weeks 3–4',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    sections: [
      {
        id: 'functions-c',
        title: 'Functions',
        subtopics: [
          {
            id: 'l3-func-basics',
            title: 'Declaration, definition, call; parameters and return values',
            details: [
              'Function prototypes (declaration) for forward reference',
              'Function definition: return_type name(param_list) { ... }',
              'Return statements and type matching',
            ],
          },
          {
            id: 'l3-callbyval-recursion',
            title: 'Call by value; recursion',
            details: [
              'Call by value: C always passes copies of arguments by default',
              'Recursive functions: base condition is critical to prevent stack overflow',
              'Classic recursive examples: Factorial, Tower of Hanoi, Binary Search',
            ],
          },
          {
            id: 'l3-storage-classes',
            title: 'Scope, storage classes (auto, static, extern, register)',
            details: [
              'auto: default local variable scope on stack',
              'static: retains value across repeated function invocations; file-scope visibility',
              'extern: declares variable defined in another translation unit / file',
              'register: hints CPU to store in register for high-speed access',
            ],
          },
          {
            id: 'l3-headers',
            title: 'Header files, #include, modular programming',
            details: [
              'Splitting code into .h (declarations) and .c (implementations)',
              'Preventing duplicate inclusion with #ifndef HEADER_H / #define HEADER_H',
              'Writing modular, reusable libraries',
            ],
          },
        ],
      },
      {
        id: 'arrays-c',
        title: 'Arrays',
        subtopics: [
          {
            id: 'l3-arrays-init',
            title: '1D and 2D arrays, declaration, initialization',
            details: [
              'Contiguous memory allocation of identical data type',
              'Zero-based indexing: arr[0] through arr[N - 1]',
              '2D arrays (matrices): int matrix[3][4] stored in row-major order',
            ],
          },
          {
            id: 'l3-search-sort',
            title: 'Array traversal, searching, sorting',
            details: [
              'Linear search O(N) vs Binary search O(log N) on sorted data',
              'Bubble sort, Selection sort, Insertion sort fundamentals',
              'Analyzing time and space complexity of elementary sorting algorithms',
            ],
          },
          {
            id: 'l3-multi-arrays',
            title: 'Multidimensional arrays, passing arrays to functions',
            details: [
              'Array decay: passing an array to a function decays to a pointer to first element',
              'Function signature: void process(int arr[], size_t len)',
              '2D array function signature: void print_matrix(int mat[][4], int rows)',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'Recursive Binary Search & Array Operations',
      description: 'Clean modular implementation of binary search passing array slice and length.',
      code: `#include <stdio.h>

// Recursive Binary Search
int binary_search(const int arr[], int low, int high, int target) {
    if (low > high) return -1; // Base case: not found
    
    int mid = low + (high - low) / 2; // Prevents integer overflow
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binary_search(arr, low, mid - 1, target);
    return binary_search(arr, mid + 1, high, target);
}

int main(void) {
    int numbers[] = { 3, 9, 14, 27, 35, 42, 58, 64, 73, 99 };
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int target = 42;

    int index = binary_search(numbers, 0, size - 1, target);
    if (index != -1) {
        printf("Found %d at index %d!\\n", target, index);
    }
    return 0;
}`,
    },
  },
  {
    levelNumber: 4,
    title: 'Strings & Pointers',
    tagline: 'Memory addressing, pointer arithmetic, string buffers & the core of C',
    estimatedTime: 'Weeks 5–6',
    keyHighlight: 'Core of C — Spend Extra Time Here!',
    badgeColor: 'border-red-500/40 text-red-400 bg-red-500/10',
    sections: [
      {
        id: 'strings-c',
        title: 'Strings',
        subtopics: [
          {
            id: 'l4-string-basics',
            title: 'String basics, null terminator',
            details: [
              'Strings are null-terminated character arrays in C',
              'The null byte \'\\0\' marks the end of string in memory',
              'char str[6] = "Hello"; requires 5 chars + 1 byte for \'\\0\'',
            ],
          },
          {
            id: 'l4-string-h',
            title: '<string.h>: strlen, strcpy, strcat, strcmp, strstr, etc.',
            details: [
              'strlen(s) returns length excluding the null terminator',
              'strcpy(dest, src) vs safer strncpy / snprintf',
              'strcat(dest, src) and strncat for concatenation',
              'strcmp(s1, s2) lexicographic comparison (returns 0 if equal)',
              'strstr(haystack, needle) substring search',
            ],
          },
          {
            id: 'l4-string-io',
            title: 'String input (gets pitfalls, fgets), char arrays vs string literals',
            details: [
              'NEVER use gets() - severe buffer overflow vulnerability (removed in C11)',
              'Use fgets(buffer, sizeof(buffer), stdin) for safe line input',
              'char arr[] = "hello" (modifiable) vs char *ptr = "hello" (read-only literal in text segment)',
            ],
          },
        ],
      },
      {
        id: 'pointers-c',
        title: 'Pointers (core of C — spend extra time)',
        subtopics: [
          {
            id: 'l4-ptr-address-deref',
            title: 'Address-of &, dereference *, pointer arithmetic',
            details: [
              '& operator retrieves memory address of a variable',
              '* operator dereferences pointer to access value at stored address',
              'Pointer arithmetic scales by sizeof(type): ptr + 1 advances by sizeof(*ptr) bytes',
            ],
          },
          {
            id: 'l4-ptr-arrays',
            title: 'Pointers and arrays, pointers to pointers',
            details: [
              'arr[i] is syntactically equivalent to *(arr + i)',
              'Pointers to pointers: int **pptr stores the address of a pointer',
              '2D dynamic matrices using int **matrix',
            ],
          },
          {
            id: 'l4-ptr-functions',
            title: 'Pointers and functions (pass by reference), pointer to function',
            details: [
              'Simulating pass-by-reference using pointers: void swap(int *a, int *b)',
              'Function pointers: int (*func_ptr)(int, int)',
              'Passing callback functions into generic handlers',
            ],
          },
          {
            id: 'l4-ptr-void-bugs',
            title: 'void*, const with pointers, NULL, common pointer bugs',
            details: [
              'void* generic pointer: must be explicitly cast before dereferencing',
              'const int *p (pointer to const data) vs int *const p (const pointer address)',
              'NULL pointer (address 0x0) guards against invalid access',
              'Common pointer traps: Segmentation Faults, wild pointers, double dereference',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'Pointer Arithmetic & Safe String Swapping',
      description: 'Demonstrating address manipulation, pass-by-pointer, and custom string length.',
      code: `#include <stdio.h>

// Pass-by-reference using pointers
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Pointer arithmetic implementation of strlen
size_t custom_strlen(const char *str) {
    const char *ptr = str;
    while (*ptr != '\\0') {
        ptr++; // advances pointer address
    }
    return (size_t)(ptr - str); // difference yields length
}

int main(void) {
    int x = 10, y = 20;
    printf("Before swap: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After swap:  x=%d, y=%d\\n", x, y);

    char msg[] = "CODE9 WITH HARI";
    printf("Message: %s | Length: %zu\\n", msg, custom_strlen(msg));
    return 0;
}`,
    },
  },
  {
    levelNumber: 5,
    title: 'Structured Data',
    tagline: 'Custom compound types, heap allocation & dynamic memory lifecycle',
    estimatedTime: 'Weeks 5–6',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    sections: [
      {
        id: 'user-types-c',
        title: 'User-Defined Types',
        subtopics: [
          {
            id: 'l5-struct-decl',
            title: 'struct: declaration, initialization, nested structs, arrays of structs',
            details: [
              'struct Student { char name[50]; int id; float gpa; };',
              'Designated initializers: struct Student s = { .id = 101, .gpa = 3.9 };',
              'Nested structs and creating arrays of structs for table-like datasets',
            ],
          },
          {
            id: 'l5-struct-pointers',
            title: 'Pointers to structs, -> operator',
            details: [
              'struct Student *ptr = &s; accesses members via arrow syntax: ptr->gpa',
              'Equivalent to (*ptr).gpa, but cleaner and preferred',
              'Passing struct pointers to functions to avoid expensive structure copying',
            ],
          },
          {
            id: 'l5-union-enum-typedef',
            title: 'union, enum, typedef',
            details: [
              'union: shares the same memory space for all its members (size equals largest member)',
              'enum: user-defined type with named integral constants (e.g. enum Status { OK, ERROR });',
              'typedef: creates clean type aliases, e.g. typedef struct Node Node;',
            ],
          },
          {
            id: 'l5-bitfields-padding',
            title: 'Bit fields, padding & alignment basics',
            details: [
              'Specifying bit fields for compact hardware registers (e.g. unsigned int flag : 1;)',
              'Structure padding: compiler adds padding bytes for CPU word boundary alignment',
              'Reordering struct fields to minimize memory wastage',
            ],
          },
        ],
      },
      {
        id: 'dynamic-memory-c',
        title: 'Dynamic Memory',
        subtopics: [
          {
            id: 'l5-malloc-free',
            title: 'malloc, calloc, realloc, free',
            details: [
              'malloc(size): allocates raw uninitialized memory block on the heap',
              'calloc(num, size): allocates and zero-initializes memory block',
              'realloc(ptr, new_size): resizes existing allocated heap memory block',
              'free(ptr): releases allocated heap memory back to the operating system',
            ],
          },
          {
            id: 'l5-memory-leaks',
            title: 'Memory leaks, dangling pointers, dynamic arrays and structs',
            details: [
              'Memory leak: losing pointer to heap block without calling free()',
              'Dangling pointer: dereferencing pointer after free() (prevent by setting ptr = NULL)',
              'Double free: calling free() on same address twice leading to undefined behavior',
              'Dynamic arrays: allocating custom length arrays at runtime',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'Dynamic Heap Allocation with Structs',
      description: 'Creating a dynamically allocated student record on heap with error checking.',
      code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[32];
    float score;
} Student;

Student* create_student(int id, const char *name, float score) {
    // Allocate heap memory
    Student *s = (Student*)malloc(sizeof(Student));
    if (s == NULL) {
        perror("Failed to allocate memory");
        return NULL;
    }
    s->id = id;
    strncpy(s->name, name, sizeof(s->name) - 1);
    s->name[sizeof(s->name) - 1] = '\\0';
    s->score = score;
    return s;
}

int main(void) {
    Student *hari = create_student(101, "Hari", 98.5f);
    if (hari) {
        printf("Student [%d]: %s, Score: %.1f\\n", hari->id, hari->name, hari->score);
        free(hari);     // Always free allocated heap memory!
        hari = NULL;    // Prevent dangling pointer
    }
    return 0;
}`,
    },
  },
  {
    levelNumber: 6,
    title: 'Advanced C',
    tagline: 'Preprocessor, file I/O, callbacks, stack/heap layout & modern C standards',
    estimatedTime: 'Weeks 7–8',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    sections: [
      {
        id: 'preprocessor-c',
        title: 'Preprocessor',
        subtopics: [
          {
            id: 'l6-macros',
            title: 'Macros, function-like macros, #define, #undef',
            details: [
              '#define MAX(a, b) (((a) > (b)) ? (a) : (b)) (parentheses guard evaluation)',
              'Stringification operator # and token-pasting operator ##',
              '#undef to revoke or redefine macros safely',
            ],
          },
          {
            id: 'l6-conditional',
            title: 'Conditional compilation (#ifdef, #ifndef, #endif)',
            details: [
              'Compiling code selectively for platforms (e.g. #ifdef _WIN32 vs #ifdef __linux__)',
              'Debug logging switches: #ifdef DEBUG ... #endif',
              '#pragma once vs standard #ifndef header include guards',
            ],
          },
        ],
      },
      {
        id: 'file-handling-c',
        title: 'File Handling',
        subtopics: [
          {
            id: 'l6-file-ops',
            title: 'FILE*, fopen, fclose, fprintf, fscanf, fread, fwrite',
            details: [
              'File pointer FILE *fp and modes: "r", "w", "a", "rb", "wb"',
              'Formatted file I/O: fprintf(fp, ...) and fscanf(fp, ...)',
              'Binary block I/O: fread(buffer, size, count, fp) and fwrite(...)',
              'Always verify if (fp == NULL) before reading/writing and call fclose(fp)',
            ],
          },
          {
            id: 'l6-file-seeking',
            title: 'Text vs binary files, fseek, ftell, rewind',
            details: [
              'Difference between line-ending transformations in text vs exact byte binary streams',
              'fseek(fp, offset, SEEK_SET / SEEK_CUR / SEEK_END)',
              'ftell(fp) to query current byte cursor location / file size calculation',
              'rewind(fp) to reset file cursor to the beginning',
            ],
          },
        ],
      },
      {
        id: 'adv-pointers-c',
        title: 'Advanced Pointers & Memory',
        subtopics: [
          {
            id: 'l6-func-pointers',
            title: 'Function pointers, callbacks (e.g., qsort)',
            details: [
              'Syntax: int (*compare)(const void *, const void *)',
              'Standard library qsort(array, count, size, compare)',
              'Building dispatch tables and event-driven callback handlers',
            ],
          },
          {
            id: 'l6-const-restrict-volatile',
            title: 'const correctness, restrict, volatile',
            details: [
              'const correctness across function signatures to guarantee read-only parameters',
              'restrict keyword (C99): promises compiler that pointers do not alias for optimization',
              'volatile keyword: prevents compiler caching for memory-mapped I/O or signals',
            ],
          },
          {
            id: 'l6-memory-layout',
            title: 'Stack vs heap, memory layout of a C program',
            details: [
              'Text segment: compiled machine instructions',
              'Data segment: initialized global/static variables',
              'BSS segment: uninitialized global/static variables',
              'Heap: dynamically allocated memory growing upward',
              'Stack: local variables, stack frames, return addresses growing downward',
            ],
          },
        ],
      },
      {
        id: 'misc-modern-c',
        title: 'Miscellaneous / Modern C',
        subtopics: [
          {
            id: 'l6-cli-args',
            title: 'Command-line arguments (argc, argv)',
            details: [
              'int main(int argc, char *argv[]) parsing flags and input files',
              'argv[0] is executable path, argv[1..argc-1] are user arguments',
            ],
          },
          {
            id: 'l6-error-handling',
            title: 'Error handling (errno, perror)',
            details: [
              'Global variable errno in <errno.h>',
              'perror("Error context") outputs readable system error message',
              'strerror(errno) converts error code to string description',
            ],
          },
          {
            id: 'l6-toolchain',
            title: 'Multi-file projects, Makefiles basics, Tools: gdb, valgrind',
            details: [
              'Writing Makefiles with targets, dependencies, and rules (CC, CFLAGS)',
              'C99/C11 features: _Bool, <stdint.h> (int32_t, uint64_t), designated initializers',
              'Debugging with gdb (breakpoints, step, backtrace)',
              'Memory leak detection with valgrind --leak-check=full ./program',
              'Compiler warning hygiene: -Wall -Wextra -Wpedantic',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'Function Pointers & qsort Callback',
      description: 'Generic sorting of integer records using standard C qsort with comparator function pointer.',
      code: `#include <stdio.h>
#include <stdlib.h>

// Comparator callback function for qsort
int compare_desc(const void *a, const void *b) {
    int int_a = *(const int *)a;
    int int_b = *(const int *)b;
    return (int_b - int_a); // descending order
}

int main(int argc, char *argv[]) {
    int scores[] = { 45, 98, 72, 88, 61, 99, 54 };
    int n = sizeof(scores) / sizeof(scores[0]);

    printf("Executing: %s with %d args\\n", argv[0], argc);
    // Standard library qsort with callback
    qsort(scores, n, sizeof(int), compare_desc);

    printf("Sorted descending: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", scores[i]);
    }
    printf("\\n");
    return 0;
}`,
    },
  },
  {
    levelNumber: 7,
    title: 'Data Structures in C (capstone)',
    tagline: 'Scratch implementation of linear & non-linear structures using structs & pointers',
    estimatedTime: 'Weeks 9–10',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
    sections: [
      {
        id: 'linear-ds',
        title: 'Linear Data Structures',
        subtopics: [
          {
            id: 'l7-linked-lists',
            title: 'Linked lists (singly, doubly)',
            details: [
              'Node structure containing data and next (and prev) pointer',
              'Insertion at head, tail, and arbitrary position',
              'Deletion, list reversal, cycle detection (Floyd\'s Tortoise and Hare algorithm)',
              'Doubly linked list bidirectional traversal and node splice',
            ],
          },
          {
            id: 'l7-stacks-queues',
            title: 'Stacks and queues',
            details: [
              'Stack (LIFO): push, pop, peek using both dynamic arrays and linked lists',
              'Applications: expression parsing, undo buffer, call stack simulation',
              'Queue (FIFO): enqueue, dequeue, circular buffer queue implementation',
            ],
          },
        ],
      },
      {
        id: 'trees-hash-c',
        title: 'Trees & Hash Tables',
        subtopics: [
          {
            id: 'l7-trees',
            title: 'Trees (binary trees, BST)',
            details: [
              'Binary tree node representation with left and right child pointers',
              'Binary Search Tree (BST) insertion, search, and deletion',
              'Tree traversals: In-order, Pre-order, Post-order, Level-order (BFS)',
            ],
          },
          {
            id: 'l7-hash-tables',
            title: 'Hash tables',
            details: [
              'Hash function computation for string keys (e.g. djb2)',
              'Collision resolution strategies: Separate chaining with linked lists or open addressing',
              'Constant time average lookup O(1) in C',
            ],
          },
          {
            id: 'l7-scratch-capstone',
            title: 'Implementing each from scratch using structs + pointers',
            details: [
              'Building self-contained, crash-resilient generic containers in pure C',
              'Proper dynamic memory freeing to ensure zero Valgrind leaks',
              'Writing comprehensive test harnesses and benchmark suites',
            ],
          },
        ],
      },
    ],
    codeSnippet: {
      title: 'Singly Linked List Implementation From Scratch',
      description: 'Pure C linked list node definition, insertion at head, traversal, and clean memory cleanup.',
      code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Push a new node to the front of the list
void push(Node **head_ref, int new_data) {
    Node *new_node = (Node*)malloc(sizeof(Node));
    if (!new_node) return;
    new_node->data = new_data;
    new_node->next = *head_ref;
    *head_ref = new_node;
}

// Traverse and print list
void print_list(const Node *node) {
    while (node != NULL) {
        printf("%d -> ", node->data);
        node = node->next;
    }
    printf("NULL\\n");
}

// Clean up heap memory
void free_list(Node *head) {
    Node *temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        free(temp);
    }
}

int main(void) {
    Node *head = NULL;
    push(&head, 70);
    push(&head, 60);
    push(&head, 50);

    printf("Capstone Linked List: ");
    print_list(head);

    free_list(head);
    return 0;
}`,
    },
  },
];

export const TIMELINE_WEEKS: TimelineWeek[] = [
  {
    weeks: 'Weeks 1–2',
    focusLevels: 'Levels 1–2',
    description: 'Master foundations, compiler pipeline, data types, standard I/O, operators, bitwise masks, and loops.',
    milestone: 'Environment configured, build pipeline understood, prime & pattern logic mastered.',
    projectOrDrill: 'Console-based number analyzer, bitwise permissions mask, and pattern generators.',
  },
  {
    weeks: 'Weeks 3–4',
    focusLevels: 'Level 3',
    description: 'Deconstruct programs into functions, grasp call-by-value, master recursion, storage classes, and 1D/2D arrays.',
    milestone: 'Modular code with header files, binary search, and sorting algorithms implemented.',
    projectOrDrill: 'Matrix math calculator & recursive maze / search solver.',
  },
  {
    weeks: 'Weeks 5–6',
    focusLevels: 'Levels 4–5',
    description: 'Pointers get real practice here! Memory addresses, pointer arithmetic, string manipulation, structs, and dynamic memory.',
    milestone: 'Confidence with &, *, void*, memory leak avoidance, malloc/free lifecycle.',
    projectOrDrill: 'Custom string manipulation library & dynamically sized student record manager.',
  },
  {
    weeks: 'Weeks 7–8',
    focusLevels: 'Level 6',
    description: 'Delve into preprocessor macros, file streams (fopen/fread/fwrite), callbacks with qsort, CLI args, Makefiles, and Valgrind.',
    milestone: 'Multi-file compilation, leak-free code verification, robust error handling with errno.',
    projectOrDrill: 'Custom grep utility or binary file parser with command-line flags.',
  },
  {
    weeks: 'Weeks 9–10',
    focusLevels: 'Level 7 + Capstone Project',
    description: 'Implement core data structures from scratch (linked lists, stacks, queues, BST, hash tables) followed by a portfolio capstone.',
    milestone: 'Full capstone project deployed and thoroughly tested with valgrind & gdb.',
    projectOrDrill: 'Student database, file-based inventory system, or a mini UNIX shell.',
  },
];

export const RECOMMENDED_RESOURCES: ResourceItem[] = [
  {
    type: 'book',
    title: 'The C Programming Language (2nd Edition)',
    authorOrPlatform: 'Brian W. Kernighan & Dennis M. Ritchie (K&R)',
    description: 'The definitive classic written by the creators of C. Compact, elegant, and packed with timeless programming exercises and pointer philosophy.',
    highlight: 'Essential Classic',
  },
  {
    type: 'book',
    title: 'C Programming: A Modern Approach',
    authorOrPlatform: 'K. N. King',
    description: 'Widely acclaimed as the most comprehensive, student-friendly, and thorough textbook covering both C89 and C99 standards with clear diagrams and Q&A sections.',
    highlight: 'Comprehensive Textbook',
  },
  {
    type: 'practice',
    title: 'Exercism (C Track)',
    authorOrPlatform: 'Exercism.org',
    description: 'Free, open-source programming exercises with automated tests and human mentoring feedback on code style and idiomatic C.',
    url: 'https://exercism.org/tracks/c',
    highlight: 'Mentored Practice',
  },
  {
    type: 'practice',
    title: 'HackerRank (C Domain)',
    authorOrPlatform: 'HackerRank',
    description: 'Structured drills organized by topic: conditional statements, loops, 1D/2D arrays, functions, pointers, and variadic functions in C.',
    url: 'https://www.hackerrank.com/domains/c',
    highlight: 'Skill Badges & Drills',
  },
  {
    type: 'practice',
    title: 'LeetCode (C Language Solutions)',
    authorOrPlatform: 'LeetCode',
    description: 'Solve real-world algorithm and data structure problems directly in C to master manual memory management, edge cases, and runtime efficiency.',
    url: 'https://leetcode.com/problemset/all/',
    highlight: 'Data Structures & Algorithms',
  },
];
