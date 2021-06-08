//
//  Games.swift
//  Spread
//
//  Created by Colton Andrews on 6/6/21.
//

import Foundation
class Api : ObservableObject{
    @Published var games = [Game]()
    func loadData(completion:@escaping ([Game]) -> ()) {
        guard let url = URL(string: "http://192.168.86.35:3001/games?Status=Final") else {
            print("Invalid url...")
            return
        }
        URLSession.shared.dataTask(with: url) { data, response, error in
            let games = try! JSONDecoder().decode([Game].self, from: data!)
            DispatchQueue.main.async {
                completion(games)
            }
        }.resume()
        
    }
}
