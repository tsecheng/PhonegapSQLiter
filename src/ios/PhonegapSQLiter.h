//
//  PhonegapSQLiter.h
//  ConferenceToGo
//
//  Created by Sam R on 12/6/12.
//
//

#import "sqlite3.h"

#import <Cordova/CDV.h>

@interface PhonegapSQLiter : CDVPlugin
{
    // Define private instance variables.
    sqlite3* _myDb;
}

- (void) openDatabaseFromSD: (CDVInvokedUrlCommand*)command;
- (void) execQuerySingleResult: (CDVInvokedUrlCommand*)command;
- (void) execQueryArrayResult: (CDVInvokedUrlCommand*)command;
- (void) execQueryNoResult: (CDVInvokedUrlCommand*)command;
- (void) closeDB: (CDVInvokedUrlCommand*)command;
- (NSArray*) execQuery :(const char*)query :(NSArray*) args :(BOOL) toReturnArray;
@end
