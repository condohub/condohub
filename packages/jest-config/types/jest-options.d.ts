/* eslint-disable */

// flow's Maybe type https://flow.org/en/docs/types/primitives/#toc-maybe-types
type Maybe<T> = void | null | undefined | T; // tslint:disable-line:void-return

// Config

type Path = string;
type Glob = string;

interface HasteConfig {
  defaultPlatform?: Maybe<string>;
  hasteImplModulePath?: string;
  platforms?: string[];
  providesModuleNodeModules: string[];
}

type ReporterConfig = [string, object];

type ConfigGlobals = object;

type SnapshotUpdateState = 'all' | 'new' | 'none';

declare module jest {
  interface DefaultOptions {
    automock: boolean;
    bail: boolean;
    browser: boolean;
    cache: boolean;
    cacheDirectory: Path;
    changedFilesWithAncestor: boolean;
    clearMocks: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: Maybe<string[]>;
    coverageDirectory: Maybe<string>;
    coveragePathIgnorePatterns: string[];
    coverageReporters: string[];
    coverageThreshold: Maybe<{ global: { [key: string]: number } }>;
    errorOnDeprecated: boolean;
    expand: boolean;
    filter: Maybe<Path>;
    forceCoverageMatch: Glob[];
    globals: ConfigGlobals;
    globalSetup: Maybe<string>;
    globalTeardown: Maybe<string>;
    haste: HasteConfig;
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleNameMapper: { [key: string]: string };
    modulePathIgnorePatterns: string[];
    noStackTrace: boolean;
    notify: boolean;
    notifyMode: string;
    preset: Maybe<string>;
    projects: Maybe<Array<string | ProjectConfig>>;
    resetMocks: boolean;
    resetModules: boolean;
    resolver: Maybe<Path>;
    restoreMocks: boolean;
    rootDir: Maybe<Path>;
    roots: Maybe<Path[]>;
    runner: string;
    runTestsByPath: boolean;
    setupFiles: Path[];
    setupTestFrameworkScriptFile: Maybe<Path>;
    skipFilter: boolean;
    snapshotSerializers: Path[];
    testEnvironment: string;
    testEnvironmentOptions: object;
    testFailureExitCode: string | number;
    testLocationInResults: boolean;
    testMatch: Glob[];
    testPathIgnorePatterns: string[];
    testRegex: string;
    testResultsProcessor: Maybe<string>;
    testRunner: Maybe<string>;
    testURL: string;
    timers: 'real' | 'fake';
    transform: Maybe<{ [key: string]: string }>;
    transformIgnorePatterns: Glob[];
    watchPathIgnorePatterns: string[];
    useStderr: boolean;
    verbose: Maybe<boolean>;
    watch: boolean;
    watchman: boolean;
  }

  interface InitialOptions {
    automock?: boolean;
    bail?: boolean;
    browser?: boolean;
    cache?: boolean;
    cacheDirectory?: Path;
    clearMocks?: boolean;
    changedFilesWithAncestor?: boolean;
    changedSince?: string;
    collectCoverage?: boolean;
    collectCoverageFrom?: Glob[];
    collectCoverageOnlyFrom?: { [key: string]: boolean };
    coverageDirectory?: string;
    coveragePathIgnorePatterns?: string[];
    coverageReporters?: string[];
    coverageThreshold?: { global: { [key: string]: number } };
    detectLeaks?: boolean;
    detectOpenHandles?: boolean;
    displayName?: string;
    expand?: boolean;
    filter?: Path;
    findRelatedTests?: boolean;
    forceCoverageMatch?: Glob[];
    forceExit?: boolean;
    json?: boolean;
    globals?: ConfigGlobals;
    globalSetup?: Maybe<string>;
    globalTeardown?: Maybe<string>;
    haste?: HasteConfig;
    reporters?: Array<ReporterConfig | string>;
    logHeapUsage?: boolean;
    lastCommit?: boolean;
    listTests?: boolean;
    mapCoverage?: boolean;
    moduleDirectories?: string[];
    moduleFileExtensions?: string[];
    moduleLoader?: Path;
    moduleNameMapper?: { [key: string]: string };
    modulePathIgnorePatterns?: string[];
    modulePaths?: string[];
    name?: string;
    noStackTrace?: boolean;
    notify?: boolean;
    notifyMode?: string;
    onlyChanged?: boolean;
    outputFile?: Path;
    passWithNoTests?: boolean;
    preprocessorIgnorePatterns?: Glob[];
    preset?: Maybe<string>;
    projects?: Glob[];
    replname?: Maybe<string>;
    resetMocks?: boolean;
    resetModules?: boolean;
    resolver?: Maybe<Path>;
    restoreMocks?: boolean;
    rootDir?: Path;
    roots?: Path[];
    runner?: string;
    runTestsByPath?: boolean;
    scriptPreprocessor?: string;
    setupFiles?: Path[];
    setupFilesAfterEnv?: Path[];
    setupTestFrameworkScriptFile?: Path;
    silent?: boolean;
    skipFilter?: boolean;
    skipNodeResolution?: boolean;
    snapshotSerializers?: Path[];
    errorOnDeprecated?: boolean;
    testEnvironment?: string;
    testEnvironmentOptions?: object;
    testFailureExitCode?: string | number;
    testLocationInResults?: boolean;
    testMatch?: Glob[];
    testNamePattern?: string;
    testPathDirs?: Path[];
    testPathIgnorePatterns?: string[];
    testRegex?: string;
    testResultsProcessor?: Maybe<string>;
    testRunner?: string;
    testURL?: string;
    timers?: 'real' | 'fake';
    transform?: { [key: string]: string | string[] };
    transformIgnorePatterns?: Glob[];
    watchPathIgnorePatterns?: string[];
    unmockedModulePathPatterns?: string[];
    updateSnapshot?: boolean;
    useStderr?: boolean;
    verbose?: Maybe<boolean>;
    watch?: boolean;
    watchAll?: boolean;
    watchman?: boolean;
    watchPlugins?: string[];
  }

  interface GlobalConfig {
    bail: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: Glob[];
    collectCoverageOnlyFrom: Maybe<{ [key: string]: boolean }>;
    coverageDirectory: string;
    coverageReporters: string[];
    coverageThreshold: { global: { [key: string]: number } };
    expand: boolean;
    forceExit: boolean;
    logHeapUsage: boolean;
    mapCoverage: boolean;
    noStackTrace: boolean;
    notify: boolean;
    projects: Glob[];
    replname: Maybe<string>;
    reporters: ReporterConfig[];
    rootDir: Path;
    silent: boolean;
    testNamePattern: string;
    testPathPattern: string;
    testResultsProcessor: Maybe<string>;
    updateSnapshot: SnapshotUpdateState;
    useStderr: boolean;
    verbose: Maybe<boolean>;
    watch: boolean;
    watchman: boolean;
  }

  interface ProjectConfig {
    automock: boolean;
    browser: boolean;
    cache: boolean;
    cacheDirectory: Path;
    clearMocks: boolean;
    coveragePathIgnorePatterns: string[];
    cwd: Path;
    detectLeaks: boolean;
    displayName: Maybe<string>;
    forceCoverageMatch: Glob[];
    globals: ConfigGlobals;
    haste: HasteConfig;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleLoader: Path;
    moduleNameMapper: Array<[string, string]>;
    modulePathIgnorePatterns: string[];
    modulePaths: string[];
    name: string;
    resetMocks: boolean;
    resetModules: boolean;
    resolver: Maybe<Path>;
    rootDir: Path;
    roots: Path[];
    runner: string;
    setupFiles: Path[];
    setupTestFrameworkScriptFile: Path;
    skipNodeResolution: boolean;
    snapshotSerializers: Path[];
    testEnvironment: string;
    testEnvironmentOptions: object;
    testLocationInResults: boolean;
    testMatch: Glob[];
    testPathIgnorePatterns: string[];
    testRegex: string;
    testRunner: string;
    testURL: string;
    timers: 'real' | 'fake';
    transform: Array<[string, Path]>;
    transformIgnorePatterns: Glob[];
    unmockedModulePathPatterns: Maybe<string[]>;
    watchPathIgnorePatterns: string[];
  }
}
