**Настройка окружения для C++ (Windows):**
1. Установите MinGW (GCC) и vcpkg.
2. Скопируйте файл `CMakeUserPresets.json.example` в `CMakeUserPresets.json`.
3. Откройте `CMakeUserPresets.json` и замените путь к MinGW на свой.
4. Файл `CMakeUserPresets.json` добавлен в `.gitignore`, поэтому ваши личные пути не попадут в общий репозиторий.