//
//  Game.swift
//  Spread
//
//  Created by Colton Andrews on 6/6/21.
//

import Foundation
struct Game: Codable, Identifiable
{
    var id: String {gameid}
    let gameid: String
    let year: Int
    let seasontype: Int
    let date: String?
    let status: String
    let htscore: Int?
    let atscore: Int?
    let htname: String
    let htkey: String
    let htid: Int
    let htlogo: String
    let htcolor1: String
    let htcolor2: String
    let atname: String
    let atkey: String
    let atid: Int
    let atlogo: String
    let atcolor1: String
    let atcolor2: String
    let spread: Double
    
}
