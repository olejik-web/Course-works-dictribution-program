#include <drogon/drogon.h>
#include <iostream>

using namespace drogon;

int main() {
    // Настраиваем роутинг
    app().registerHandler(
        "/api/cpp-hello",
        [](const HttpRequestPtr& req,
           std::function<void (const HttpResponsePtr &)> &&callback) {
            
            // Создаем JSON-ответ
            Json::Value jsonResponse;
            jsonResponse["message"] = "Hello from C++ Core (Drogon)!";
            jsonResponse["status"] = "success";
            
            auto resp = HttpResponse::newHttpJsonResponse(jsonResponse);
            resp->setStatusCode(k200OK);
            callback(resp);
        },
        {Get} // Обрабатываем только GET запросы
    );

    std::cout << "C++ Server started on port 8080" << std::endl;
    
    // Слушаем порт 8080
    app().addListener("0.0.0.0", 8080).run();
    
    return 0;
}