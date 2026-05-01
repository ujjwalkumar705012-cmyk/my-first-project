#include<iostream>
#include<vector>
#include<string>
#include<algorithm>
#include<climits>
#include<stack>
using namespace std;

string removeDuplicates(string str) {
        stack<char>s;
        for(char ch : str){
            if(!s.empty() && s.top() == ch){
                s.pop();
            }else{
                s.push(ch);
            }
            cout<<s.top()<<" ";
            cout<<ch<<endl;
        }
        string res = "";
        while(!s.empty()){
            res = s.top() + res;
            s.pop();
        }
        return res;
    }
int main(){
    string str = "abbxzzy";
   cout<<removeDuplicates(str);
    return 0;
}