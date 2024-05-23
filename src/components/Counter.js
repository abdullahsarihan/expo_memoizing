//src/components/Counter.js
import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useMemo } from "react";
import Header from "./Header";
import User from "./User";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Mehmet"); //burda bir state im daha olsun, başlangıçta Mehmet
  const user = useMemo(() => {
    return {
      id: 1,
      name, // state imdeki name i burda doğrudan kullanıyorum.
    };
  }, [name]); //

  console.log("Counter component re-render");

  //İsmi değiştir adında bir buton daha koyuyorum. Butona bastıktan sonra Mehmet yazısının Ahmet olarak değişmesini bekliyoruz
  //Ancak herhangi bir değişiklik olmadı. name setName state i güncellendi fakat ekrana bir değişim yansımadı çünkü
  //Bu object sadece mount anında [] oluşturuldu. Eğer ben name değiştiğinde de bu object baştan oluşturulsun istersem bu
  //dependecy array in içerisine ilgili state i belirtmeliyim. Artık ismi değiştir dediğim zaman ekrandaki isim değişiyor.
  //Ve User componenti de yeniden render edilmiş oluyor.

  //Count u güncellediğimiz sürece User componenti render eilmeyecektir. Ne zaman ki ismi değiştiririm ancak o zaman User comp.
  //render edilecek çünkü render edilmesine ihtiyacım var çünkü isim değişti. İsmi değiştiği için de güncel ismi göstermek için de
  //benim bu componenti render etmem lazım. Dolayısıyla bu user objesi sadece ve sadece name değiştiği anda yeniden hesaplanmasını
  //bellekte yeni bir referans gösterilmesini istiyorum.

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.text}>{count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + 1)} />
      <Button title="İsmi Değiştir" onPress={() => setName("Ahmet")} />

      <User user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default Counter;
