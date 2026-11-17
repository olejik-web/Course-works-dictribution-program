cmake_minimum_required(VERSION 3.20)
project(CppCore LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Просто ищем пакеты, vcpkg уже позаботился об их установке
find_package(drogon CONFIG REQUIRED)
find_package(nlohmann_json CONFIG REQUIRED)

add_executable(cpp_core src/main.cpp)

target_link_libraries(cpp_core PRIVATE 
    Drogon::Drogon 
    nlohmann_json::nlohmann_json 
    ws2_32 # Сетевая библиотека Windows
)