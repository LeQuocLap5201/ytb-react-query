## useQuery nhận vào 3 đối số
    - Đối số 1: name unique Key
    - Đối số 2: hàm xứ lý call api
    - Đối số 3: (không bắt buộc) là một Object chứa các định dạng khi call api

useQuery(
"super-heroes", => unique Key
fetchSuperHeroes, => Call API
{
    - cacheTime: 5000, // Thời gian clear Cache => Default: 5p
    - staleTime: 30000, // Thời gian lấy api mới nhất => Default: 0s
    - refetchOnMount: true, // Call lại api khi Component Mount => Default: true (false, 'always')
    - refetchOnWindowFocus: true, //Khi window được focus, hay quay lại thì api sẽ được call lại để lấy data mới nhất => Default: true (false, 'always')
    - refetchInterval: false, // Sau bao nhiều thời gian sẽ tự động call lại api, để làm mới data, sẽ không call api nếu không Focus vào window(Nhưng nếu vẫn muốn tự động thì dùng 'refetchIntervalInBackground' ) => Default: false
    - refetchIntervalInBackground: true, // => Default: false
    - enabled: false, // Sẽ không call api khi Component Mount, WindowFocus => Default: true
    - onSuccess: onSuccess, // Handle event onSuccess by callback
    - onError: onError, // Handle event onError by callback
    - retry: Số lần call lại "n" lần api khi call không thành công, sau "n" lần call lại api không thành công thì trả về Error => Default: 3
    - select: (data) => {
        const superHeroNames = data.data.map((hero) => hero?.name);
        return superHeroNames;
        },
    => select giúp convert từ api trả về sang dữ liệu mà FE mong muốn. select có giá trị truyền vào là 'data' từ api trả về và Return dữ liệu mà FE mong muốn sau khi đã xử lý
}
);
