What is tsconfig.json file??

    tsconfig.json signifies the directory in which it is kept is the root of TypeScript project and we can also specify the output directory in the same file.
	The tsconfig.json file specifies the root files and the compiler options required to compile the project.
	EX:
        Root directory (where your .ts file exists) path in tsconfig.json file is: "rootDir": "./src"
        Output directory (where your .js file exists after compile) path in tsconfig.json file is: "outDir": "./public"

    Note 1: After configure, you only need to fire tsc command to compile your .ts file.
    No need to specify the name of the file just after the tsc keyword during compile.

    Note 2: "include": ["src"] //Specifying only convert src folder .ts file not other files that is outside the folder