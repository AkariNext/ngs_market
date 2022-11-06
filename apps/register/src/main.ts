import { RegisterOP } from "./app/ops";

const registers = [
    RegisterOP
]

async function main() {
    for (const register of registers) {
        const instance = new register()
        await instance.setup()
        await instance.run()
    }
}

main()