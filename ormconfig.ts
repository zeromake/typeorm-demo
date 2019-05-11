export default {
    "type": "sqlite",
    "database": "sqlite.db",
    "synchronize": true,
    "logging": true,
    "entities": ["db/entity/**/*.ts"],
    "migrations": ["db/migrations/**/*.ts"],
    "cli": {
        "entitiesDir": "db/entity",
        "migrationsDir": "db/migrations"
    }
}

