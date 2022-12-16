// interfaces in typescript

interface JavaScript {
    _function: string;
    _class: string;
    _declaration: string;
    _strictMode?: string; // may be or may not be
    _runsOnV8(): string; // declaring that it is a legit function
};

interface TypeScript extends JavaScript {
    _staticTypeChecking: string
};