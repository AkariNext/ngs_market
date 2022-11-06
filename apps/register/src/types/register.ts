export interface BaseRegister {
    run(): Promise<void>
    setup(): Promise<void>
}