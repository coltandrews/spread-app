//
//  ContentView.swift
//  Spread
//
//  Created by Colton Andrews on 6/5/21.
//

import SwiftUI

struct ContentView: View {
    @State var games = [Game]()
    let df = DateFormatter()
    var body: some View {
            List(games) { game in
                VStack(alignment: .leading) {
               
                    Text("\(game.htname) vs \(game.atname)")
                        .font(.title)
                        .foregroundColor(.red)
                        .padding(.bottom)
                    HStack{
                        Text("Date: \(game.date!)").font(.body).fontWeight(.bold)
                    }
                    
                    
                    HStack{
                        
                        Text("\(game.htkey): \(game.htscore!)")
                            .font(.body)
                            .fontWeight(.semibold)

                        Text("\(game.atkey): \(game.atscore!)")
                            .font(.body)
                            .fontWeight(.semibold)
                    }
                    HStack{
                        Text("Spread: \(game.spread)")
                            .font(.body)
                            .fontWeight(.semibold)
                    }
                    Spacer()
                }
                
            }
                .onAppear() {
                    Api().loadData { (games) in
                        self.games = games
                    }
                }.navigationTitle("Game List")
        }
   
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

